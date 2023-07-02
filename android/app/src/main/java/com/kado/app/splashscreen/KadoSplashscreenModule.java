package com.kado.app.splashscreen;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.kado.app.splashscreen.KadoSplashscreen;

import javax.annotation.Nonnull;

public class KadoSplashscreenModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    KadoSplashscreenModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Nonnull
    @Override
    public String getName() {
        return "KadoSplashscreen";
    }

    @ReactMethod
    public void hide(Promise promise) {
        KadoSplashscreen.hide(getCurrentActivity(), promise);
    }
}