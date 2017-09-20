var projectName = 'uh7a1';

; (function ($, window, document, undefined) {
   "use strict";

   if (typeof window === 'undefined'
      || window.Math !== Math) {
      if (typeof self !== 'undefined'
         && self.Math === Math) {
         window = self;
      } else {
         window = Function('return this')();
      }
   }

   $.fn[projectName] = function (parameters) {
      $.fn[projectName].settings = {
         objects: ['a00', 'b00'],

         groups: ['main', 'phonetic', 'han-viet', 'translit', 'mean', 'notes'],

         classes: {
            chapter: projectName + '-chapter',
            a00: 'a00',
            b00: 'b00',

            moreInfo: '#more-info',
            main: 'main',
            phonetic: 'phonetic',
            'han-viet': 'han-viet',
            translit: 'translit',
            mean: 'mean',
            notes: 'notes',

            show: 'show',
            rt: 'rt'
         },

         selectors: {
            chapter: '.' + projectName + '-chapter',
            content: '.content',

            a00: '.a00',
            b00: '.b00',

            moreInfo: '#more-info',
            main: '.main',
            phonetic: '.phonetic',
            'han-viet': '.han-viet',
            translit: '.translit',
            mean: '.mean',
            notes: '.notes'
         },

         attributes: {
            key: 'key'
         },

         formater: {
            objects: function () {
               return '<ruby class="content"></ruby>';
            },
            ruby: function (value) {
               return '<ruby>' + value + '</ruby>';
            },
            rt: function (value) {
               return '<rt>' + value + '</rt>';
            },
            rb: function (value) {
               return '<rb>' + value + '</rb>';
            }
         },
      };

      var
         $allModules = $(this),

         query = arguments[0],
         methodInvoked = typeof query === 'string',
         queryArguments = [].slice.call(arguments, 1),
         returnedValue = 0;

      $allModules.each(function () {
         var
            $module = $(this),

            settings = $.extend(true, {}, $.fn.uh7a1.settings, parameters),

            objects = settings.objects,
            groups = settings.groups,

            classes = settings.classes,

            selectors = settings.selectors,

            attributes = settings.attributes,

            formater = settings.formater,

            $chapter = $(selectors.chapter),
            $moreInfo = $(selectors.moreInfo).first(),

            fontSize = parseFloat($chapter.css('font-size')),

            errorWords = {};

         function addErrorWord(word) {
            if (!errorWords.hasOwnProperty(word)) {
               errorWords[word] = true;
            }

            return 0;
         }

         function showMoreInfo(top, left, handle, key) {
            if (data.hasOwnProperty(handle)
               && data[handle].hasOwnProperty(key)) {
               $(groups).each(function (index, group) {
                  var
                     $infoElement = $moreInfo.find(selectors[group]),

                     value = data[handle][key];

                  if (value.hasOwnProperty(group)) {
                     $infoElement.html(value[group]);
                  }
                  else {
                     $infoElement.html('');
                  }
               });

               top -= $moreInfo.height();
               left -= $moreInfo.width() / 2;

               var
                  screenWidth = $(window).width();

               if (left < 0) {
                  left = 0;
               } else if (left > screenWidth) {
                  left = screenWidth - $moreInfo.outerWidth();

                  if (left < 0) {
                     left = 0;
                  }
               }

               $moreInfo.css('top', top + 'px');
               $moreInfo.css('left', left + 'px');
               $moreInfo.addClass(classes.show);

               return 0;
            }
         }

         function hideMoreInfo() {
            $moreInfo.removeClass(classes.show);

            return 0;
         };

         var
            utility = {
               initializeObject: function ($content, $parent, handle, key, content, group) {
                  if (data.hasOwnProperty(handle)
                     && data[handle].hasOwnProperty(key)) {
                     var
                        value = data[handle][key];

                     switch (group) {
                        case classes.main:
                           {
                              $content.html(content);
                           }
                           break;

                        case classes.phonetic:
                           {
                              if (value.hasOwnProperty(group)) {
                                 $content.html($content.html() + formater.rt(value[group]));

                                 $parent.addClass(classes.rt);
                              }
                           }
                           break;

                        case classes.translit:
                           {
                              if (value.hasOwnProperty(group)) {
                                 $parent.html(formater.rb(value[group]) + $parent.html());
                              }
                           }
                           break;
                     }
                  } else {
                     $content.html(key);

                     console.log(
                        'NOT FOUND ' + key
                        + ' in <' + handle + '> group');

                     addErrorWord(key);
                  }
               },

               initializeObjects: function () {
                  $(objects).each(function () {
                     var
                        handle = this;

                     $module.find(selectors[handle]).each(function () {
                        var
                           $element = $(this),

                           key = $element.attr(attributes.key),
                           content = $element.html();

                        $element.html(formater.objects());

                        var
                           $content = $element.find(selectors.content).first(),
                           $parent = $content.parent();

                        $(groups).each(function (index, group) {
                           utility.initializeObject($content, $parent, handle, key, content, group);
                        });

                        $element.hover(function () {
                           var
                              position = $element.position(),

                              top = position.top
                                 - $(document).scrollTop(),

                              left = position.left
                                 + $element.width() / 2 - $(document).scrollLeft();

                           showMoreInfo(top, left, handle, key);
                        });

                        $element.mouseleave(function () {
                           hideMoreInfo();
                        });
                     });
                  });

                  var
                     count = Object.keys(errorWords).length;

                  if (count > 0) {
                     var output = '';

                     $.each(errorWords, function (key, value) {
                        output += key + '\n';
                     });

                     prompt('Ctrl+C', output);
                  }

                  return 0;
               }
            },

            module = {
               initialize: function () {
                  utility.initializeObjects();

                  return 0;
               },
            }

         module.initialize();

         return (returnedValue !== undefined) ? returnedValue : this;
      });
   }
})(jQuery, window, document);

$(document).ready(function () {
   $('.uh7a1-chapter').uh7a1();
});