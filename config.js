var config = {
    style: 'mapbox://styles/daltonwb/ckxsaz25s1dx414qdkmb9lz6u',
    accessToken: 'pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: '<a href="https://www.crisisgroup.org" target="_blank"><img src="images/icg-oj.png" width="60" height="60" /></a><br /><h1>Rough Seas: Maritime Tensions in the Gulf</h1>',
    subtitle: '',
    byline: '',
    footer: '<h4>Credits</h4><strong>Lead Contributor</strong>: Ali Vaez<br /><strong>Visualizations</strong>: Paul Franz<br /><strong>Support</strong>: Razi Arminian and Naysan Rafati<br /><br /><h4>Data Sources</h4> <div class="data-sources"><a href="https://www.openstreetmap.org" target="_blank">OpenStreetMap</a><br /><a href="https://www.mapbox.com" target="_blank">Mapbox</a> and <a href="https://www.mapbox.com/community" target="_blank">Mapbox Community Team</a><br /><br /><a href="https://www.crisisgroup.org/legal" target="_blank">Privacy Policy & Legal</a></div>',
    chapters: [
      {
          id: '00',
          alignment: 'left',
          hidden: false,
          title: '',
          image: '',
          description: 'Since 2019, maritime tensions around involving Iran  have grown more pronounced, with dozens of confirmed or suspected incidents in a multidimensional shadow war playing out from the Indian Ocean to the Mediterranean.',
          location: {
            center: [56.227470, 23.626711],
            zoom: 3,
            pitch: 35,
            bearing: -12
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
            image: '',
            description: 'Nearly one-fifth of the world’s oil, and a quarter of its liquified natural gas, flows through the Strait of Hormuz. More than forty thousand ships each year. But this chokepoint and the waters around it are also a major geopolitical flashpoint.',
            location: {
              center: [57.210231, 24.266239],
              zoom: 5.4,
              pitch: 47,
              bearing: -8.8
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
                layer: 'hormuz-dot',
                duration: 1000,
                opacity: 1
              }
            ],
            onChapterExit: [
              {
                layer: 'hormuz',
                duration: 1000,
                opacity: 0
              },
              {
                layer: 'hormuz-dot',
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
              center: [48.000236, 23.802554],
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
            id: '03',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'A spate of attacks against commercial tankers in May 2019 marked the start of a two-pronged Iranian response to the U.S. “maximum pressure” campaign, which significantly interrupted Iran’s oil export, a key revenue source for Tehran.',
            location: {
              center: [12.234568, 23.422547],
              zoom: 2,
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
            id: '04',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'As Iran started downgrading its compliance with the 2015 Joint Comprehensive Plan of Action (JCPOA), it also stepped up its regional provocations as part of a “maximum resistance” campaign to counter the Trump administration’s unilateral sanctions.',
            location: {
              center: [12.234568, 23.422547],
              zoom: 2,
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
            id: '05',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Iranian political and military officials had for months threatened that U.S. curtailment of its energy sales would not go without a response.',
            location: {
              center: [12.234568, 23.422547],
              zoom: 2,
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
            id: '06',
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            description: '<h2 class="liftout">“We will make the enemy understand that either everyone can use the Strait of Hormuz or no one”,</h2> – Commander of the Islamic Revolutionary Guard Corps (IRGC) in July 2018.',
            location: {
              center: [12.234568, 23.422547],
              zoom: 2,
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
            id: '07-QUOTE',
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            description: '<h2 class="liftout">“America should know that we are selling our oil and will continue to sell our oil and they are not able to stop our oil exports… if one day they want to prevent the export of Iran’s oil then no oil will be exported from the Persian Gulf”.</h2>- Iranian President Hassan Rouhani',
            location: {
              center: [12.234568, 23.422547],
              zoom: 2,
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
            id: '08',
            alignment: 'left',
            hidden: false,
            title: 'The port of Fujairah',
            image: '',
            description: 'In 12 May 2019, amidst high tension between Tehran and Washington, four tankers were attacked near the UAE port of Fujairah.',
            location: {
              center: [56.464665, 25.188390],
              zoom: 11.9,
              pitch: 63,
              bearing: -109.30
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'fujairah-ships',
                duration: 1000,
                opacity: 1
              }
            ],
            onChapterExit: [
              {
                layer: 'fujairah-ships',
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
            description: 'The Fujairah attacks were followed by a series of additional attacks and seizures against commercial shipping. By August 2021, there were at least 37 suspected Iranian operations against vessels flagged from more than a dozen countries.',
            location: {
              center: [58.783763, 22.493531],
              zoom: 5.6,
              pitch: 31,
              bearing: -9.77
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
            id: '10',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'images/imsc_logo.png',
            description: 'In response, the U.S. announced it was putting together an International Maritime Security Construct to promote freedom of navigation. Eight countries are currently part of the Bahrain-based IMSC, which operates Task Force Sentinel: <ul><li>Albania</li><li>Bahrain</li><li>Estonia</li><li>Lithuania</li><li>Saudi Arabia</li><li>United Arab Emirates</li><li>United Kingdom</li><li>United States</li>',
            location: {
              center: [12.234568, 23.422547],
              zoom: 2,
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
            id: '11',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'images/emasoh_logo.jpeg',
            description: 'In January 2020, several European governments set up a parallel mission, European Maritime Awareness in the Strait of Hormuz (EMASOH), headquartered in Abu Dhabi.<ul><li>Belgium</li><li>Denmark</li><li>France</li><li>Germany</li><li>Greece</li><li>Italy</li><li>The Netherlands</li><li>Portugal</li>',
            location: {
              center: [12.234568, 23.422547],
              zoom: 2,
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
            id: '12',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Meanwhile, brief reports would emerge from time to time about vague incidents aboard Iranian vessels - technical malfunctions, unexplained outages. For example, on 30 April 2019 - less than two weeks before the Furaijah attacks - an Iranian tanker suffered what was described as an engine failure in the Red Sea. But later that year, it told the International Maritime Organization that the Happiness-1 had actually been attacked.',
            location: {
              center: [12.234568, 23.422547],
              zoom: 2,
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
            description: 'In March 2021, the WSJ revealed that in fact, since 2019 at least a dozen attacks had been carried out by Israel against Iranian vessels.',
            location: {
              center: [12.234568, 23.422547],
              zoom: 2,
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
            id: '14',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'This brought out of the shadows a maritime front that is one of several across which Israel and Iran are at daggers drawn. A report by an Iranian outlet close to Iran’s national security establishment claimed that Iranian ships had been targeted 14 times in two years, mostly in the Red Sea and eastern Mediterranean.',
            location: {
              center: [12.234568, 23.422547],
              zoom: 2,
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
            description: 'A July 2021 attack against the Mercer Street, a Liberian-flagged, Japanese-owned vessel linked to Israeli ownership, was a notable escalation. It was deadly, killing the ship’s Romanian master and a UK citizen. And it was widely attributed to Iran, including by the G-7 and EU. And it was widely attributed to Iran, including by the G-7 and EU. But Tehran dismissed what it called "bogus allegations".',
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
                layer: 'maritime-tracker',
                duration: 1000,
                opacity: 1
              }
            ],
            onChapterExit: [

          ]
        },
        {
            id: '15',
            alignment: 'left',
            hidden: false,
            title: 'Policy Recommendations',
            image: '',
            description: 'EMASOH and ISMC could increase coordination or merge to increase their capabilities. If the participating states are transparent about their intentions – namely protecting shipping and the free flow of commerce - Tehran need not see these measures as yet another way to exert pressure on Iran. Still, as a precaution, the European and other Western states should supplement the maritime security efforts with structured military-to-military communication with the Iranian side, including through a hotline that might be created to reduce the risk of miscalculation or misunderstanding that could lead to confrontation.',
            location: {
              center: [12.234568, 23.422547],
              zoom: 2,
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
        }
    ]
};
