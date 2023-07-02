module.exports = {
	testRunner: {
		args: {
			$0: 'jest',
			config: './jest-e2e.config.js',
		},
		jest: { setupTimeout: 120000 },
	},
	apps: {
		'ios.debug': {
			type: 'ios.app',
			binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator/Kado.app',
			build:
				'RN_SRC_EXT=e2e.ts xcodebuild -workspace ios/Kado.xcworkspace -scheme Kado -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build EXCLUDED_ARCHS=arm64 ONLY_ACTIVE_ARCH=YES -quiet',
		},
		'ios.release': {
			type: 'ios.app',
			binaryPath: 'ios/build/Build/Products/Release-iphonesimulator/Kado.app',
			build:
				'export RCT_NO_LAUNCH_PACKAGER=true && RN_SRC_EXT=e2e.ts xcodebuild -workspace ios/Kado.xcworkspace -scheme Kado -configuration Release -sdk iphonesimulator -derivedDataPath ios/build ONLY_ACTIVE_ARCH=YES -quiet',
		},
		'android.debug': {
			type: 'android.apk',
			binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
			build:
				'cd android; RN_SRC_EXT=e2e.ts ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug ; cd -',
		},
		'android.release': {
			type: 'android.apk',
			binaryPath: 'android/app/build/outputs/apk/release/app-release.apk',
			build:
				'cd android; RN_SRC_EXT=e2e.ts ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release ; cd -',
		},
	},
	devices: {
		simulator: {
			type: 'ios.simulator',
			device: {
				type: 'iPhone 14 Pro Max',
			},
		},
		emulator: {
			type: 'android.emulator',
			device: {
				avdName: 'Pixel_XL_API_30',
			},
		},
		'android.attached': {
			type: 'android.attached',
			device: {
				adbName: 'b10579e',
			},
		},
	},
	configurations: {
		'ios.sim.debug': {
			device: 'simulator',
			app: 'ios.debug',
		},
		'ios.sim.release': {
			device: 'simulator',
			app: 'ios.release',
		},
		'android.emu.debug': {
			device: 'emulator',
			app: 'android.debug',
		},
		'android.emu.release': {
			device: 'emulator',
			app: 'android.release',
		},
		'android.device.debug': {
			device: 'android.attached',
			app: 'android.debug',
		},
		'android.device.release': {
			device: 'android.attached',
			app: 'android.release',
		},
	},
};
