package com.kado.app.splashscreen;

import android.app.Activity;
import android.app.Dialog;
import com.facebook.react.bridge.Promise;
import com.kado.app.R;

public class KadoSplashscreen {
    public static boolean isAnimationFinished = true;
    private static Promise _promise = null;
    private static Dialog dialog = null;

    public static void show(final Activity activity) {
        if (activity == null) return;

        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (!activity.isFinishing()) {
                    dialog = new Dialog(activity, R.style.KadoSplashscreen);
                    dialog.setContentView(R.layout.launch_screen);
                    dialog.setCancelable(false);
                    dialog.show();
                }
            }
        });
    }

    private static void finish(Activity activity) {
        if (dialog != null) {
            activity.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    dialog.dismiss();
                    if (_promise != null) {
                        _promise.resolve(true);
                    }
                }
            });
        }
    }

    public static void hide(Activity activity, Promise promise) {
        if (activity == null) return;

        _promise = promise;

        if (isAnimationFinished) {
            finish(activity);
        }
    }
}