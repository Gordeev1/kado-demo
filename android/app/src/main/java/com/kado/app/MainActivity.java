package com.kado.app;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;
import com.facebook.react.modules.i18nmanager.I18nUtil;
import com.kado.app.splashscreen.KadoSplashscreen;
import com.kado.app.BuildConfig;
import com.zoontek.rnbars.RNBars;
import android.content.Intent;
import android.os.Bundle;
import android.view.WindowManager;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "Kado";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    KadoSplashscreen.show(this);
    I18nUtil sharedI18nUtilInstance = I18nUtil.getInstance();
    sharedI18nUtilInstance.allowRTL(getApplicationContext(), false);
    // RNBars.init(MainActivity.this, "dark-content");
    super.onCreate(null);
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. There the RootView is created and
   * you can specify the renderer you wish to use - the new renderer (Fabric) or the old renderer
   * (Paper).
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
     return new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        // If you opted-in for the New Architecture, we enable the Fabric Renderer.
        DefaultNewArchitectureEntryPoint.getFabricEnabled(), // fabricEnabled
        // If you opted-in for the New Architecture, we enable Concurrent React (i.e. React 18).
        DefaultNewArchitectureEntryPoint.getConcurrentReactEnabled() // concurrentRootEnabled
        );
  }

  private void configureSecureFlag() {
    // Lower than the given version of Android SDK caches the app's screenshot for "Recent Apps" thumbnail
    // before emitting app state change to JS. This results us not being able to blur the app screens when it's inactive,
    // that is a security concern, so we disable taking screenshot completely, that in turn - disables caching
    int SCREENSHOT_ENABLED_MIN_SDK = android.os.Build.VERSION_CODES.S;

    if(android.os.Build.VERSION.SDK_INT < SCREENSHOT_ENABLED_MIN_SDK) {
      getWindow().addFlags(WindowManager.LayoutParams.FLAG_SECURE);
    }
  }
}
