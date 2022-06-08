var config = {
    style: 'mapbox://styles/daltonwb/cl45t2ebr001b14mztql08wct',
    accessToken: 'pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: true,
    theme: 'light',
    projection: 'globe',
    use3dTerrain: true,
    title: '<a href="https://www.crisisgroup.org" target="_blank"><img src="images/icg-oj.png" width="100" height="100" /></a><br /><h1>Rough Seas: Tracking Maritime Tensions with Iran</h1>',
    subtitle: '',
    byline: '',
    footer: '<h4>Credits</h4><strong>Lead Contributor</strong>: Ali Vaez<br /><strong>Visualizations</strong>: Paul Franz and Claire Boccon-Gibod<br /><strong>Support</strong>: Naysan Rafati<br /><br /><h4>Data Sources</h4> <div class="data-sources"><a href="https://www.openstreetmap.org" target="_blank">OpenStreetMap</a><br /><a href="https://www.mapbox.com" target="_blank">Mapbox</a> and <a href="https://www.mapbox.com/community" target="_blank">Mapbox Community Team</a><br /><br /><a href="https://www.crisisgroup.org/legal" target="_blank">Privacy Policy & Legal</a></div>',
    chapters: [
      {
          id: '00',
          alignment: 'left',
          hidden: false,
          title: '',
          image: '',
          description: 'Since 2019, maritime tensions involving Iran have grown more pronounced, with dozens of confirmed or suspected incidents in a multidimensional shadow war playing out from the Indian Ocean to the Mediterranean.',
          location: {
            center: [44.750101, 27.807322],
            zoom: 3.5,
            pitch: 0,
            bearing: 0
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
              layer: 'countries',
              duration: 1000,
              opacity: .6
            },
            {
              layer: 'countries-labels',
              duration: 1000,
              opacity: 1
            }
          ],
          onChapterExit: [
            {
              layer: 'countries',
              duration: 1000,
              opacity: 0
            },
            {
              layer: 'countries-labels',
              duration: 1000,
              opacity: 0
            }
        ]
      },
        {
            id: '01',
            alignment: 'left',
            hidden: false,
            title: 'A Global Chokepoint',
            image: 'images/hormuz.png',
            description: 'Nearly one-fifth of the world’s oil, and a quarter of its liquified natural gas, flows through the Strait of Hormuz. More than forty thousand ships each year. This chokepoint and the waters around it have long been a major geopolitical flashpoint.',
            location: {
              center: [55.604979, 25.750385],
              zoom: 6.75,
              pitch: 40.50,
              bearing: 12
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'hormuz',
                duration: 1000,
                opacity: 1
              },
              {
                layer: 'natural-label',
                duration: 1000,
                opacity: 1
              },
              {
                layer: 'maritime-tracker',
                duration: 1000,
                opacity: 0
              }
            ],
            onChapterExit: [
              {
                layer: 'hormuz',
                duration: 1000,
                opacity: 0
              },
              {
                layer: 'natural-label',
                duration: 1000,
                opacity: 0
              }
          ]
        },
        {
            id: '02',
            alignment: 'left',
            hidden: false,
            title: 'Maritime Incidents Tracker',
            image: '',
            description: 'The implications of an escalation would be profound and carry global reverberations.',
            location: {
              center: [44.090466, 24.903992],
              zoom: 4.25,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'maritime-tracker',
                duration: 1000,
                opacity: 1
              }
            ],
            onChapterExit: [
          ]
        },
        {
            id: '03',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'A spate of attacks against commercial tankers in May 2019 marked the start of a two-pronged Iranian response to the U.S. “maximum pressure” campaign, which significantly interrupted Iran’s oil export, a key revenue source for Tehran.',
            location: {
              center: [44.090466, 24.903992],
              zoom: 4.25,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'maritime-tracker',
                duration: 1000,
                opacity: 1
              }
            ],
            onChapterExit: [

          ]
        },
        {
            id: '05',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '<a href="Averting the Middle East’s 1914 Moment" target="_blank">Iranian political and military officials had for months threatened</a> that U.S. curtailment of its energy sales would not go without a response.',
            location: {
              center: [44.090466, 24.903992],
              zoom: 4.25,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'maritime-tracker',
                duration: 1000,
                opacity: 1
              }
            ],
            onChapterExit: [
              {
                layer: 'maritime-tracker',
                duration: 1000,
                opacity: 0
              }
          ]
        },
        {
            id: '07-QUOTE',
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            description: '<h2 class="liftout">“America should know that we are selling our oil and will continue to sell our oil and they are not able to stop our oil exports… if one day they want to prevent the export of Iran’s oil then <span style="font-weight: 900;">no oil will be exported from the Persian Gulf</span>”.</h2>&dash; Former Iranian President Hassan Rouhani &dash; December 2018',
            location: {
              center: [49.1940636, 32.2242379],
              zoom: 6,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'iran-markers',
                duration: 1000,
                opacity: 0
              },
              {
                layer: 'iran-markers-tick',
                duration: 1000,
                opacity: 0
              }
            ],
            onChapterExit: [

          ]
        },
        {
            id: '08',
            alignment: 'left',
            hidden: false,
            title: 'The port of Fujairah',
            image: '',
            description: 'In 12 May 2019, amidst high tension between Tehran and Washington, four tankers were attacked near the UAE port of Fujairah.',
            location: {
              center: [56.449505, 25.183881],
              zoom: 12.34,
              pitch: 69.50,
              bearing: -110.13
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'fujairah-ships',
                duration: 1000,
                opacity: 1
              },
              {
                layer: 'ships-icons',
                duration: 1000,
                opacity: 1
              },
              {
                layer: 'iran-markers',
                duration: 1000,
                opacity: 1
              },
              {
                layer: 'iran-markers-tick',
                duration: 1000,
                opacity: 1
              }
            ],
            onChapterExit: [
              {
                layer: 'fujairah-ships',
                duration: 1000,
                opacity: 0
              },
              {
                layer: 'ships-icons',
                duration: 1000,
                opacity: 0
              },
              {
                layer: 'iran-markers',
                duration: 1000,
                opacity: 0
              },
              {
                layer: 'iran-markers-tick',
                duration: 1000,
                opacity: 0
              }
          ]
        },
        {
            id: '09',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'By August 2021, there were nearly two dozen suspected Iranian operations against vessels flagged from an array of countries, ranging from East Asia to the Caribbean and of equally varying ownership.',
            location: {
              center: [51.331551, 21.898902],
              zoom: 4.8,
              pitch: 42,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'counter-iranian-ops',
                duration: 1000,
                opacity: 1
              },
              {
                layer: 'iran-markers',
                duration: 1000,
                opacity: 0
              },
              {
                layer: 'iran-markers-tick',
                duration: 1000,
                opacity: 0
              }
            ],
            onChapterExit: [
              {
                layer: 'counter-iranian-ops',
                duration: 1000,
                opacity: 0
              }
          ]
        },
        {
            id: '10',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'images/imsc_logo.png',
            description: 'In response, the U.S. announced it was putting together an International Maritime Security Construct to promote freedom of navigation. Nine countries are currently part of the Bahrain-based IMSC, which operates Task Force Sentinel: <ul><li>Albania</li><li>Bahrain</li><li>Estonia</li><li>Lithuania</li><li>Romania</li><li>Saudi Arabia</li><li>United Arab Emirates</li><li>United Kingdom</li><li>United States</li></ul>Sentinel’s area of operations includes both the Strait of Hormuz and the Bab al-Mandeb, another major chokepoint.',
            location: {
              center: [50.542852, 26.0493386],
              zoom: 11,
              pitch: 25,
              bearing: 35
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'iran-markers',
                duration: 1000,
                opacity: 1
              },
              {
                layer: 'iran-markers-tick',
                duration: 1000,
                opacity: 1
              }
            ],
            onChapterExit: [

          ]
        },
        {
            id: '11',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'images/emasoh_logo.png',
            description: 'In January 2020, several European governments set up a parallel mission, European Maritime Awareness in the Strait of Hormuz (EMASOH), headquartered in Abu Dhabi.<ul><li>Belgium</li><li>Denmark</li><li>France</li><li>Germany</li><li>Greece</li><li>Italy</li><li>The Netherlands</li><li>Portugal</li>',
            location: {
              center: [54.418536, 24.3870789],
              zoom: 11,
              pitch: 25,
              bearing: 35
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [
              {
                layer: 'iran-markers',
                duration: 1000,
                opacity: 0
              },
              {
                layer: 'iran-markers-tick',
                duration: 1000,
                opacity: 0
              }
          ]
        },
        {
            id: '12',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Meanwhile, brief reports would emerge from time to time about vague incidents aboard Iranian vessels &dash; technical malfunctions, unexplained outages. For example, on 30 April 2019 &dash; less than two weeks before the Furaijah attacks &dash; an Iranian tanker suffered what was described as an engine failure in the Red Sea. But later that year, Tehran told the International Maritime Organization that the Happiness-1 had actually been attacked.',
            location: {
              center: [41.024142, 17.706115],
              zoom: 4,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [

          ]
        },
        {
            id: '13',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'images/wsj.jpg',
            description: 'In March 2021, the Wall Street Journal revealed that at least a dozen attacks had been carried out by Israel against Iranian vessels since 2019.',
            location: {
              center: [40.971, 25.829],
              zoom: 4.8,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'iranian-ops',
                duration: 1000,
                opacity: 1
              }
            ],
            onChapterExit: [
              {
                layer: 'iranian-ops',
                duration: 1000,
                opacity: 0
              }
          ]
        },
        {
            id: '14',
            alignment: 'center',
            hidden: false,
            title: '',
            image: 'images/red-sea-map.jpg',
            description: 'This brought out of the shadows a maritime front that is one of several across which Israel and Iran are sparring with one another. A report by an Iranian outlet close to Iran’s national security establishment claimed that Israel had targeted Iranian ships 14 times in two years, mostly in the Red Sea and eastern Mediterranean.',
            location: {
              center: [40.971, 25.829],
              zoom: 4.8,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [

          ]
        },
        {
            id: '15',
            alignment: 'left',
            hidden: false,
            title: 'Attack on Oil Tanker',
            image: 'images/mercer_street.jpg',
            description: 'A July 2021 attack against the Mercer Street, a Liberian-flagged, Japanese-owned vessel linked to Israeli ownership, was a notable escalation. It was deadly, killing the ship’s Romanian master and a UK citizen. And it was widely attributed to Iran, including by the G-7 and EU. But Tehran dismissed what it called "bogus allegations".',
            location: {
              center: [59.522652, 21.139930],
              zoom: 9.45,
              pitch: 56,
              bearing: -20.36
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
              {
                layer: 'mercer-street',
                duration: 1000,
                opacity: 1
              },
              {
                layer: 'mercer-street-flag',
                duration: 1000,
                opacity: 1
              }
            ],
            onChapterExit: [
              {
                layer: 'mercer-street',
                duration: 1000,
                opacity: 0
              },
              {
                layer: 'mercer-street-flag',
                duration: 1000,
                opacity: 0
              }
          ]
        },
        {
            id: '15B',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'More recently, the Revolutionary Guards responded to the U.S. seizure of an Iranian crude shipment by detaining two Greek-flagged vessels in May 2022.',
            location: {
              center: [53.552, 26.125],
              zoom: 7.3,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'greek-flag',
                duration: 1000,
                opacity: 1
              },
              {
                layer: 'greek-vessels',
                duration: 1000,
                opacity: 1
              }
            ],
            onChapterExit: [
              {
                layer: 'greek-flag',
                duration: 1000,
                opacity: 0
              },
              {
                layer: 'greek-vessels',
                duration: 1000,
                opacity: 0
              }
          ]
        },
        {
            id: '16',
            alignment: 'left',
            hidden: false,
            title: 'Policy Recommendations',
            image: '',
            description: 'The specific entanglements between Iran and Israel, and the wider tension around international shipping, are not necessarily coordinated, although Iran is likely to see it that way. Regardless, they both highlight the possibility for' + '<span style="color: #E87722; font-weight: bold;"> individual incidents to spin out of control</span>' + ', setting off a wider confrontation.' + '<br /><br />' + 'Indeed, the recent uptick in maritime tension underscores a dangerous lose-lose dynamic: enforcement of sanctions, likely to increase so long as Tehran and Washington remain at loggerheads over reviving the 2015 nuclear deal, prevents Iran from normalising its oil trade. In turn, Iran increases its provocations against international shipping. <br /><br />These tit-for-tat exchanges raise the risk of escalation while serving neither side’s interests.' + '<span style="color: #E87722; font-weight: bold;"> Defusing the core point of contention through diplomacy, while bolstering regional dialogues that lower the temperature between Iran and Gulf Arab states</span>, is sorely needed.' + '<br /><br />' + 'At the same time, greater multilateral action to protect international shipping can complement these negotiations. EMASOH and ISMC could increase coordination or merge to increase their capabilities. But even if the participating states are transparent about their intentions &dash; namely protecting shipping and the free flow of commerce &dash; Tehran is likely to see these measures as yet another way to exert pressure on Iran. That is why' + '<span style="color: #E87722; font-weight: bold;"> the European and other Western states should supplement the maritime security efforts with structured military-to-military communication with the Iranian side</span>,' + 'including through a hotline that might be created to reduce the risk of miscalculation or misunderstanding that could swiftly escalate to direct confrontation.',
            location: {
              center: [43.894031, 23.574273],
              zoom: 3.75,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'disableFreetime',
            onChapterEnter: [],
            onChapterExit: [

          ]
        },
        {
            id: '17',
            alignment: 'left',
            hidden: false,
            title: 'In Depth: Explore the Data',
            image: '',
            description: '<strong>Explore & find more insights with our dataset</strong>. Zoom using the tools in the top right and click on individual points for more data.' + '<br /><br />' + 'Or, download the entire dataset as CSV <a href="data/06062022_maritime_data.csv" target="_blank">here</a>.' + '<a id="freeExplore" href="#16">Return to the story ↑ </a>',
            location: {
              center: [43.894031, 23.574273],
              zoom: 3.75,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'enableFreetime',
            onChapterEnter: [

            ],
            onChapterExit: [

          ]
        }
    ]
};
