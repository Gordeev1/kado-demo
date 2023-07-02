#import <React/RCTBridgeModule.h>
#import <UIKit/UIKit.h>

@interface KadoSplashscreen : NSObject <RCTBridgeModule>
+ (void) start: (UIView*) rootView;
+ (void) finish;
@end
