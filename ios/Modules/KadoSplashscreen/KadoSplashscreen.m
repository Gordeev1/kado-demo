#import "KadoSplashscreen.h"
#import <UIKit/UIKit.h>
#import <AVFoundation/AVFoundation.h>
#import <AVKit/AVKit.h>

@implementation KadoSplashscreen

RCT_EXPORT_MODULE();

static RCTPromiseResolveBlock resolver = nil;
static UIView *loadingView = nil;

static bool isAnimationFinished = true;

+ (void) start: (UIView*) rootView {
    loadingView = [[[NSBundle mainBundle] loadNibNamed: @"LaunchScreen" owner:self options:nil] firstObject];
    
    CGRect frame = rootView.frame;
    frame.origin = CGPointMake(0, 0);
    loadingView.frame = frame;
    loadingView.backgroundColor = [UIColor blackColor];
  
    [rootView addSubview:loadingView];
}

+ (void) finish {
  dispatch_async(dispatch_get_main_queue(), ^{
    [loadingView removeFromSuperview];
    loadingView = nil;
    resolver(nil);
  });
}

RCT_REMAP_METHOD(hide, resolver: (RCTPromiseResolveBlock) resolve rejecter: (RCTPromiseRejectBlock) reject) {
  resolver = resolve;
  
  if (isAnimationFinished) {
    [KadoSplashscreen finish];
  }
}

@end
