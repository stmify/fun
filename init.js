(()=>{"use strict";var e,r,_,t,i,a={},n={};function __webpack_require__(e){var r=n[e];if(void 0!==r)return r.exports;var _=n[e]={exports:{}};return a[e](_,_.exports,__webpack_require__),_.exports}__webpack_require__.m=a,e=[],__webpack_require__.O=(r,_,t,i)=>{if(!_){var a=1/0;for(u=0;u<e.length;u++){for(var[_,t,i]=e[u],n=!0,c=0;c<_.length;c++)(!1&i||a>=i)&&Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](_[c])))?_.splice(c--,1):(n=!1,i<a&&(a=i));if(n){e.splice(u--,1);var o=t();void 0!==o&&(r=o)}}return r}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[_,t,i]},_=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,__webpack_require__.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var i=Object.create(null);__webpack_require__.r(i);var a={};r=r||[null,_({}),_([]),_(_)];for(var n=2&t&&e;"object"==typeof n&&!~r.indexOf(n);n=_(n))Object.getOwnPropertyNames(n).forEach((r=>a[r]=()=>e[r]));return a.default=()=>e,__webpack_require__.d(i,a),i},__webpack_require__.d=(e,r)=>{for(var _ in r)__webpack_require__.o(r,_)&&!__webpack_require__.o(e,_)&&Object.defineProperty(e,_,{enumerable:!0,get:r[_]})},__webpack_require__.f={},__webpack_require__.e=e=>Promise.all(Object.keys(__webpack_require__.f).reduce(((r,_)=>(__webpack_require__.f[_](e,r),r)),[])),__webpack_require__.u=e=>723===e?"lightbox.3489c2bc8f62c7ee72ed.bundle.min.js":48===e?"text-path.b50b3e74488a4e302613.bundle.min.js":209===e?"accordion.8799675460c73eb48972.bundle.min.js":745===e?"alert.cbc2a0fee74ee3ed0419.bundle.min.js":120===e?"counter.02cef29c589e742d4c8c.bundle.min.js":192===e?"progress.ca55d33bb06cee4e6f02.bundle.min.js":520===e?"tabs.c2af5be7f9cb3cdcf3d5.bundle.min.js":181===e?"toggle.31881477c45ff5cf9d4d.bundle.min.js":791===e?"video.d86bfd0676264945e968.bundle.min.js":268===e?"image-carousel.4455c6362492d9067512.bundle.min.js":357===e?"text-editor.2c35aafbe5bf0e127950.bundle.min.js":52===e?"wp-audio.75f0ced143febb8cd31a.bundle.min.js":413===e?"container.3e03f0b480c65f79dee6.bundle.min.js":void 0,__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={},i="elementor:",__webpack_require__.l=(e,r,_,a)=>{if(t[e])t[e].push(r);else{var n,c;if(void 0!==_)for(var o=document.getElementsByTagName("script"),u=0;u<o.length;u++){var b=o[u];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==i+_){n=b;break}}n||(c=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,__webpack_require__.nc&&n.setAttribute("nonce",__webpack_require__.nc),n.setAttribute("data-webpack",i+_),n.src=e),t[e]=[r];var onScriptComplete=(r,_)=>{n.onerror=n.onload=null,clearTimeout(p);var i=t[e];if(delete t[e],n.parentNode&&n.parentNode.removeChild(n),i&&i.forEach((e=>e(_))),r)return r(_)},p=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=onScriptComplete.bind(null,n.onerror),n.onload=onScriptComplete.bind(null,n.onload),c&&document.head.appendChild(n)}},__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var r=__webpack_require__.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var _=r.getElementsByTagName("script");_.length&&(e=_[_.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e})(),(()=>{var e={162:0};__webpack_require__.f.j=(r,_)=>{var t=__webpack_require__.o(e,r)?e[r]:void 0;if(0!==t)if(t)_.push(t[2]);else if(162!=r){var i=new Promise(((_,i)=>t=e[r]=[_,i]));_.push(t[2]=i);var a=__webpack_require__.p+__webpack_require__.u(r),n=new Error;__webpack_require__.l(a,(_=>{if(__webpack_require__.o(e,r)&&(0!==(t=e[r])&&(e[r]=void 0),t)){var i=_&&("load"===_.type?"missing":_.type),a=_&&_.target&&_.target.src;n.message="Loading chunk "+r+" failed.\n("+i+": "+a+")",n.name="ChunkLoadError",n.type=i,n.request=a,t[1](n)}}),"chunk-"+r,r)}else e[r]=0},__webpack_require__.O.j=r=>0===e[r];var webpackJsonpCallback=(r,_)=>{var t,i,[a,n,c]=_,o=0;if(a.some((r=>0!==e[r]))){for(t in n)__webpack_require__.o(n,t)&&(__webpack_require__.m[t]=n[t]);if(c)var u=c(__webpack_require__)}for(r&&r(_);o<a.length;o++)i=a[o],__webpack_require__.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return __webpack_require__.O(u)},r=self.webpackChunkelementor=self.webpackChunkelementor||[];r.forEach(webpackJsonpCallback.bind(null,0)),r.push=webpackJsonpCallback.bind(null,r.push.bind(r))})()})();
var jwsThemeModule;
(function($) {
    "use strict";
    jwsThemeModule = (function() {
        return {
            jws_script: jws_script,
            init: function() {
                this.login_form();
                this.header_sticky();
                this.menu_list();
            },
            owl_caousel_init: function($container) {
                $container.data('options', $container.data('owl-option'));
                var options = $container.data('options');
                var autoplay = !1;
                if (typeof options != 'undefined') {
                    autoplay = (options.autoplay) ? !0 : !1
                }
                options = $.extend({}, options, {
                    "autoplayHoverPause": autoplay
                });
                $container.owlCarousel(options);
                $container.removeAttr("data-owl-option")
            },
            jws_carousel: function($scope, $) {
                $scope.find('.jws-carousel').eq(0).each(function() {
                    var $this = $(this);
                    var option_attr = $this.find('.carousel').data('slick');
                    if (typeof option_attr === 'undefined') return !1;
                    option_attr.navigation = {
                        nextEl: $this.find('.jws-button-next'),
                        prevEl: $this.find('.jws-button-prev'),
                    }
                    option_attr.pagination = {
                        el: $this.find('.custom_dots'),
                        clickable: !0,
                    }
                    if (typeof Swiper !== 'undefined') {
                        if (option_attr.direction == 'vertical') {
                            $this.find('.carousel').css('height', $this.find('.swiper-slide').height())
                        }
                        new Swiper($this.find('.carousel'), option_attr)
                    }
                })
            },
            menu_list: function() {
                $(document).on("click", 'body[data-elementor-device-mode="mobile"] .jws-menu-list.toggle-mobile .menu-list-title', function() {
                    $(this).next('ul').slideToggle()
                })
            },
            header_sticky: function() {
                if ($('.jws_box_bulder').length) {
                    return !1
                }
                if ($('.cafe-row-sticky')[0]) {
                    $('.cafe-row-sticky').each(function() {
                        var $this = $(this);
                        var $sidebar = $('.jws_sticky_move');
                        var $parent = $(this).parent();
                        var current_width = 0;
                        var old_height = $this.outerHeight();
                        $(window).resize(function() {
                            if (current_width != $(window).width()) {
                                current_width = $(window).outerWidth();
                                if (current_width > 1024.98 && $this.hasClass('desktop-sticky')) {
                                    $parent.height(old_height)
                                } else if (current_width < 1024.98 && current_width > 768.98 && $this.hasClass('tablet-sticky')) {
                                    $parent.height($this.outerHeight())
                                } else if (current_width < 768.98 && $this.hasClass('mobile-sticky')) {
                                    $parent.height($this.outerHeight())
                                } else {
                                    $this.removeClass('is-sticky');
                                    $this.find('.elementor-widget-clever-site-logo').removeClass('header-is-sticky');
                                    $parent.height('auto')
                                }
                            }
                        }).resize();
                        var HeaderTop = $parent.offset().top - $('body').offset().top;
                        var old_top_position = 0;
                        $(window).on('scroll', function() {
                            var top = $(window).scrollTop();
                            if ($this.hasClass('cafe-scroll-up-sticky')) {
                                top = top - $parent.outerHeight();
                                if (old_top_position > top && top > $parent.outerHeight() * 3) {
                                    $this.not('.active-sticky').addClass('active-sticky');
                                    $this.removeClass('no-active-sticky');
                                    $sidebar.removeClass('no-active-sticky')
                                } else {
                                    $this.removeClass('active-sticky');
                                    if ($this.hasClass('is-sticky')) {
                                        $this.addClass('no-active-sticky');
                                        $sidebar.addClass('no-active-sticky')
                                    }
                                }
                                old_top_position = top
                            }
                            if (current_width > 1024.98 && $this.hasClass('desktop-sticky')) {
                                if (HeaderTop < top) {
                                    $this.not('.is-sticky').addClass('is-sticky');
                                    $this.find('.elementor-widget-clever-site-logo:not(.header-is-sticky)').addClass('header-is-sticky');
                                    $('.cafe-wrap-menu .toggle .arrow.on-scroll').parents('.cafe-wrap-menu').removeClass('toggle-active');
                                    $('.cafe-wrap-menu .toggle .arrow.on-scroll').parents('.cafe-wrap-menu').find('.wrap-menu-inner').slideUp()
                                } else {
                                    $this.removeClass('is-sticky');
                                    $this.removeClass('no-active-sticky');
                                    $sidebar.removeClass('no-active-sticky');
                                    $this.find('.elementor-widget-clever-site-logo').removeClass('header-is-sticky');
                                    $('.cafe-wrap-menu .toggle .arrow.on-scroll').parents('.cafe-wrap-menu').addClass('toggle-active');
                                    $('.cafe-wrap-menu .toggle .arrow.on-scroll').parents('.cafe-wrap-menu').find('.wrap-menu-inner').slideDown()
                                }
                            } else if (current_width < 1024.98 && current_width > 768.98 && $this.hasClass('tablet-sticky')) {
                                if (HeaderTop < top) {
                                    $this.not('.is-sticky').addClass('is-sticky');
                                    $this.find('.elementor-widget-clever-site-logo').addClass('header-is-sticky');
                                    $('.cafe-wrap-menu .toggle .arrow.on-scroll').parents('.cafe-wrap-menu').removeClass('toggle-active');
                                    $('.cafe-wrap-menu .toggle .arrow.on-scroll').parents('.cafe-wrap-menu').find('.wrap-menu-inner').slideUp()
                                } else {
                                    $this.removeClass('is-sticky');
                                    $this.removeClass('no-active-sticky');
                                    $sidebar.removeClass('no-active-sticky');
                                    $this.find('.elementor-widget-clever-site-logo').removeClass('header-is-sticky');
                                    $('.cafe-wrap-menu .toggle .arrow.on-scroll').parents('.cafe-wrap-menu').addClass('toggle-active');
                                    $('.cafe-wrap-menu .toggle .arrow.on-scroll').parents('.cafe-wrap-menu').find('.wrap-menu-inner').slideDown()
                                }
                            } else if (current_width < 768.98 && $this.hasClass('mobile-sticky')) {
                                if (HeaderTop < top) {
                                    $this.not('.is-sticky').addClass('is-sticky');
                                    $this.find('.elementor-widget-clever-site-logo:not(.header-is-sticky)').addClass('header-is-sticky');
                                    $('.cafe-wrap-menu .toggle .arrow.on-scroll').parents('.cafe-wrap-menu').removeClass('toggle-active');
                                    $('.cafe-wrap-menu .toggle .arrow.on-scroll').parents('.cafe-wrap-menu').find('.wrap-menu-inner').slideUp()
                                } else {
                                    $this.removeClass('is-sticky');
                                    $this.removeClass('no-active-sticky');
                                    $sidebar.removeClass('no-active-sticky');
                                    $this.find('.elementor-widget-clever-site-logo.header-is-sticky').removeClass('header-is-sticky');
                                    $('.cafe-wrap-menu .toggle .arrow.on-scroll').parents('.cafe-wrap-menu').addClass('toggle-active');
                                    $('.cafe-wrap-menu .toggle .arrow.on-scroll').parents('.cafe-wrap-menu').find('.wrap-menu-inner').slideDown()
                                }
                            }
                        })
                    })
                }
            },
            menu_offset: function() {
                var setOffset = function(li, $menu) {
                    var $dropdown = li;
                    var dropdownWidth = $dropdown.outerWidth();
                    var dropdownOffset = $menu.offset();
                    var toRight;
                    var viewportWidth;
                    var dropdownOffset2;
                    var dropdownOffsetRight;
                    var $dropdown_parent = $dropdown.parents('.elementor-column').offset();
                    var before_menu = $dropdown.find('.before-menu');
                    viewportWidth = $(document).width();
                    if (!dropdownWidth || !dropdownOffset) {
                        return
                    }
                    dropdownOffsetRight = viewportWidth - dropdownOffset.left - dropdownWidth;
                    if ($dropdown.hasClass('mega_menu')) {
                        if (viewportWidth < dropdownWidth) {
                            $menu.addClass('fullwidth');
                            dropdownOffsetRight = -dropdownOffset.left
                        } else {
                            $menu.removeClass('fullwidth')
                        }
                        if ($dropdown.hasClass('left')) {
                            if (dropdownOffsetRight < 0) {
                                $dropdown.css({
                                    left: dropdownOffsetRight
                                })
                            } else {
                                $dropdown.css({
                                    left: 0
                                })
                            }
                        }
                        dropdownOffset2 = $dropdown.offset();
                        before_menu.css({
                            left: $menu.find('> a > span').offset().left - dropdownOffset2.left + $menu.find('> a > span').outerWidth() / 2
                        });
                        if ($dropdown.hasClass('center')) {
                            let item_offsect = -dropdownWidth / 2 + $menu.outerWidth() / 2;
                            $dropdown.css({
                                left: item_offsect
                            })
                        }
                    }
                };
                $('.elementor_jws_menu_layout_menu_horizontal li.menu-item-design-mega_menu_full_width , .elementor_jws_menu_layout_menu_horizontal li.menu-item-design-mega_menu').each(function() {
                    var $menu = $(this);
                    $menu.find(' > .sub-menu-dropdown').each(function() {
                        setOffset($(this), $menu)
                    })
                })
            },
            login_form: function() {
                function checkForInput(element, $check) {
                    const $label = $(element).parents('.form-row');
                    if ($(element).val().length > 0 || $check) {
                        $label.addClass('entering_text')
                    } else {
                        $label.removeClass('entering_text')
                    }
                }
                $('.jws-animation .input').each(function() {
                    checkForInput(this, !1)
                });
                $('.jws-animation .input').on('change keyup focus', function() {
                    checkForInput(this, !0)
                });
                $('.jws-animation .input').on('focus', function() {
                    checkForInput(this, !0)
                }).on('focusout', function() {
                    checkForInput(this, !1)
                });
                $('.jws-login-form').each(function() {
                    function checkpassword(password) {
                        var strength = 0,
                            meter = $('.meter'),
                            meter_text = $('.text-meter'),
                            password_hint = $('.jws-password-hint');
                        if (password.match(/[a-z]+/)) {
                            strength += 1
                        }
                        if (password.match(/[A-Z]+/) && password.length >= 8) {
                            strength += 1
                        }
                        if (password.match(/[0-9]+/) && password.length >= 12) {
                            strength += 1
                        }
                        if (password.match(/[$@#&!]+/) && password.length >= 14) {
                            strength += 1
                        }
                        if (password.length > 0) {
                            meter.show();
                            password_hint.show()
                        } else {
                            meter.hide();
                            password_hint.hide()
                        }
                        switch (strength) {
                            case 0:
                                meter_text.html("");
                                meter.attr("meter", "0");
                                break;
                            case 1:
                                meter_text.html(jwsThemeModule.jws_script.metera);
                                meter.attr("meter", "1");
                                break;
                            case 2:
                                meter_text.html(jwsThemeModule.jws_script.meterb);
                                meter.attr("meter", "2");
                                break;
                            case 3:
                                meter_text.html(jwsThemeModule.jws_script.meterc);
                                meter.attr("meter", "3");
                                password_hint.hide();
                                break;
                            case 4:
                                meter_text.html(jwsThemeModule.jws_script.meterd);
                                meter.attr("meter", "4");
                                password_hint.hide();
                                break
                        }
                    }
                    $(this).find('.change-form.login').on('click', function(e) {
                        e.preventDefault();
                        $this.addClass('in-login');
                        $this.removeClass('in-register');
                        $this.find('.form-contaier').trigger('to.owl.carousel', 0)
                    });
                    $(this).find('.change-form.register').on('click', function(e) {
                        e.preventDefault();
                        $this.removeClass('in-login');
                        $this.addClass('in-register');
                        $this.find('.form-contaier').trigger('refresh.owl.carousel');
                        $this.find('.form-contaier').trigger('to.owl.carousel', 1)
                    });
                    $(this).find(".toggle-password2").click(function() {
                        $(this).toggleClass("jws-icon-eye-slash-light");
                        $(this).parents('form').find('input[type="password"]').addClass('change-type');
                        if ($(this).parents('form').find('.change-type').attr("type") == "password") {
                            $(this).parents('form').find('.change-type').attr("type", "text")
                        } else {
                            $(this).parents('form').find('.change-type').attr("type", "password")
                        }
                    })
                })
            }
        }
    }());
    $(document).ready(function() {
        jwsThemeModule.init()
    });
    
    $(window).on("resize", function(e) {
        jwsThemeModule.menu_offset()
    });
})(jQuery)