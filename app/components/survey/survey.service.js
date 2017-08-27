/**
 * Properties of the revelo app
 *
 * @class revelo.service.SurveyService
 * @memberOf revelo.SurveyService
 * @author Ashish Mishra <ashishjpm@gmail.com>
 */

;
(function() {
    revelo
        .factory('SurveyService', function($http, AppConstant) {
            function getQuestions(surveyId) {
            	return $http({
                    url: 
                        AppConstant.url.base +  
                        AppConstant.url.survey + 
                        AppConstant.url.details + 
                        '?surveyId='+surveyId,
                    method: 'GET'
                });
            };

            function getDummyData(){
                return [{"id":170,"question":"Budget for this Phone?","answer":null,"type":"single_string_choice","status":null,"referenceId":null,"questionGroup":"User;fa-user;#651826","internalObject":{"options":[{"value":"1.0","label":"around 10000 ","reference_id":"2f850236-705a-11e7-b529-0a580a0001f0"},{"data":{"PriceINR":{"formula":"Piecewise( (-10000, y>24000), (10000, y>=16000), (-10000, y<16000), (-10000, True))","substitutions":[],"symbols":["y"]}},"label":"around 20000 ","value":"2.0","$$hashKey":"object:195"},{"data":{"PriceINR":{"formula":"Piecewise( (-10000, y>35000), (10000, y>=25000), (-10000, y<25000), (-10000, True))","substitutions":[],"symbols":["y"]}},"label":"around 30000 ","value":"3.0","$$hashKey":"object:196"},{"data":{},"label":"Sky is limit ","value":"4.0","$$hashKey":"object:197"},{"data":{},"label":"Not decided on price ","value":"5.0","$$hashKey":"object:198"}]}},{"id":172,"question":"Do you play games on phone?","answer":null,"type":"single_string_choice","status":null,"referenceId":null,"questionGroup":"User;fa-user;#651826","internalObject":{"options":[{"data":{},"label":"I don't play games ","value":"1.0"},{"data":{"Ram":{"formula":"x/3","substitutions":[],"symbols":["x"]}},"label":"Sometimes ","value":"2.0"},{"data":{"Ram":{"formula":"x","substitutions":[],"symbols":["x"]}},"label":"Gaming is life ","value":"3.0"}]}},{"id":173,"question":"Most important feature of my phone","answer":null,"type":"single_string_choice","status":null,"referenceId":null,"questionGroup":"User;fa-user;#651826","internalObject":{"options":[{"data":{"ResolutionWidth":{"formula":"x/3","substitutions":[],"symbols":["x"]},"ResolutionPpi":{"formula":"x/3","substitutions":[],"symbols":["x"]},"ResolutionHeight":{"formula":"x/3","substitutions":[],"symbols":["x"]}},"label":"Super display ","value":"1.0"},{"data":{"SecondaryCameraPixel":{"formula":"x/3","substitutions":[],"symbols":["x"]},"PrimaryCameraPixel":{"formula":"x/2","substitutions":[],"symbols":["x"]}},"label":"Awesome camera ","value":"2.0"},{"data":{},"label":"Voice and call quality ","value":"3.0"},{"data":{"Ram":{"formula":"x/2","substitutions":[],"symbols":["x"]}},"label":"App performance ","value":"4.0"},{"data":{},"label":"Stylish look ","value":"5.0"},{"data":{},"label":"Brand ","value":"6.0"},{"data":{},"label":"Battery Life ","value":"7.0"}]}},{"id":174,"question":"Which of following type of photos you would be clicking a lot","answer":null,"type":"single_string_choice","status":null,"referenceId":null,"questionGroup":"Camera;fa-camera;#651826","internalObject":{"options":[{"data":{"PrimaryCameraPixel":{"formula":"Piecewise((10000, y>16),(10000*y/16, y>=8),(-10000, True))","substitutions":[],"symbols":["y"]}},"label":"Landscape ","value":"1.0"},{"data":{"PrimaryCameraPixel":{"formula":"Piecewise((10000, y>16),(10000*y/16, y>=8),(-10000, True))/3","substitutions":[],"symbols":["y"]},"CameraVideoResolution":{"formula":"x/3","substitutions":[],"symbols":["x"]},"CameraVideoFps":{"formula":"x/3","substitutions":[],"symbols":["x"]}},"label":"Baby photos ","value":"2.0"},{"data":{"PrimaryCameraPixel":{"formula":"Piecewise((10000, y>16),(10000*y/16, y>=8),(-10000, True))/2","substitutions":[],"symbols":["y"]}},"label":"Random photos ","value":"3.0"},{"data":{"SecondaryCameraPixel":{"formula":"Piecewise((10000, y>16),(10000*y/16, y>=4),(-10000, True))","substitutions":[],"symbols":["y"]}},"label":"Selfie ","value":"4.0"},{"data":{"SecondaryCameraPixel":{"formula":"x/4","substitutions":[],"symbols":["x"]},"PrimaryCameraPixel":{"formula":"x/4","substitutions":[],"symbols":["x"]},"CameraVideoResolution":{"formula":"x/4","substitutions":[],"symbols":["x"]},"CameraVideoFps":{"formula":"x/4","substitutions":[],"symbols":["x"]}},"label":"Mixture of all of above ","value":"5.0"},{"data":{},"label":"Don't click a lot of photos ","value":"6.0"}]}},{"id":175,"question":"Does photos clicked by you play role professionaly","answer":null,"type":"single_string_choice","status":null,"referenceId":null,"questionGroup":"Camera;fa-camera;#651826","internalObject":{"options":[{"data":{"PrimaryCameraPixel":{"formula":"X/6","substitutions":[],"symbols":[]},"CameraVideoResolution":{"formula":"X/6","substitutions":[],"symbols":[]},"CameraVideoFps":{"formula":"X/6","substitutions":[],"symbols":[]}},"label":"Yes ","value":"1.0"},{"data":{},"label":"No ","value":"2.0"}]}},{"id":177,"question":"How frequently do you watch movies on mobile?","answer":null,"type":"single_string_choice","status":null,"referenceId":null,"questionGroup":"Media;fa-music;#651826","internalObject":{"options":[{"data":{"ResolutionWidth":{"formula":"x/6","substitutions":[],"symbols":["x"]},"ResolutionPpi":{"formula":"x/6","substitutions":[],"symbols":["x"]},"ResolutionHeight":{"formula":"x/6","substitutions":[],"symbols":["x"]},"ScreenSize":{"formula":"x/2","substitutions":[],"symbols":["x"]}},"label":"All the time ","value":"1.0"},{"data":{"ResolutionWidth":{"formula":"x/8","substitutions":[],"symbols":["x"]},"ResolutionPpi":{"formula":"x/8","substitutions":[],"symbols":["x"]},"ResolutionHeight":{"formula":"x/8","substitutions":[],"symbols":["x"]},"ScreenSize":{"formula":"x/3","substitutions":[],"symbols":["x"]}},"label":"Sometimes ","value":"2.0"},{"data":{},"label":"Rarely ","value":"3.0"}]}},{"id":178,"question":"Do you stream music and movies or store them on phone?","answer":null,"type":"single_string_choice","status":null,"referenceId":null,"questionGroup":"Media;fa-music;#651826","internalObject":{"options":[{"data":{},"label":"Mostly stream over internet ","value":"1.0"},{"data":{"InternalStorage":{"formula":"Piecewise((10000, y>=32),(5000, y>=16),(-10000, true))/2","substitutions":[],"symbols":["y"]},"CardSlotCapacity":{"formula":"Piecewise((10000, y>=32),(5000, y>=16),(-10000, true))/2","substitutions":[],"symbols":["y"]}},"label":"Mostly store on phone ","value":"2.0"},{"data":{"InternalStorage":{"formula":"Piecewise((10000, y>=32),(5000, y>=16),(-10000, true))/4","substitutions":[],"symbols":["y"]},"CardSlotCapacity":{"formula":"Piecewise((10000, y>=32),(5000, y>=16),(-10000, true))/4","substitutions":[],"symbols":["y"]}},"label":"Store some and stream some ","value":"4.0"},{"data":{},"label":"I don't listen music or watch movies ","value":"5.0"}]}}];
            }

            // TODO: delete if not used
            function processRawSurveyDetails(rawData){
                var processedData = rawData;
                // for (var i = 0; i < rawData.length; i++) {
                //     var temp = {
                //         type: rawData[i].type;
                //     }
                // }
                return processedData;
            }

            function getSurveyTypes(surveyDetails){
                var surveyTypes = [];
                for (var i = 0; i < surveyDetails.length; i++) {
                    var name = surveyDetails[i].questionGroup.split(';')[0];
                    if( surveyTypes.map(function(obj){return obj.name}).indexOf(name) == -1 ){
                        var temp = {
                            name: name,
                            status: 'inactive'
                        }
                        surveyTypes.push(temp);
                    }
                }
                return surveyTypes;
            }

            return {
            	getQuestions: getQuestions,
                getDummyData: getDummyData,
                getSurveyTypes: getSurveyTypes
            };
        });
}());