# Rails asset helper loader

Webpack loader to convert [Rails asset pipeline helper methods](http://guides.rubyonrails.org/v4.2/asset_pipeline.html#css-and-sass) into actual urls.

Currently converts

- asset-url("some-img.jpg") => url(/assets/some-img.jpg)
- image-url("some-img.jpg") => url(/assets/some-img.jpg)
- font-url("some-font.ttf") => url(/assets/some-font.ttf)
