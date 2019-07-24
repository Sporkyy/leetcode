// 559. Maximum Depth of N-ary Tree
// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
const maxDepth = root =>
  !root ? 0 : root.children.reduce((acc, curr) => Math.max(acc, maxDepth(curr)), 0) + 1;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example 1',
    input: {
      val: 1,
      children: [
        {
          val: 3,
          children: [
            {
              val: 5,
              children: [],
            },
            {
              val: 6,
              children: [],
            },
          ],
        },
        {
          val: 2,
          children: [],
        },
        {
          val: 4,
          children: [],
        },
      ],
    },
    expected: 3,
  },
  {
    name: 'Null',
    input: null,
    expected: 0,
  },
  {
    name: 'Errorful 1',
    input: {
      $id: '1',
      children: [
        {
          $id: '2',
          children: [],
          val: 79,
        },
        {
          $id: '3',
          children: [
            {
              $id: '4',
              children: [],
              val: 44,
            },
            {
              $id: '5',
              children: [
                {
                  $id: '6',
                  children: [
                    {
                      $id: '7',
                      children: [
                        {
                          $id: '8',
                          children: [
                            {
                              $id: '9',
                              children: [],
                              val: 69,
                            },
                            {
                              $id: '10',
                              children: [
                                {
                                  $id: '11',
                                  children: [
                                    {
                                      $id: '12',
                                      children: [
                                        {
                                          $id: '13',
                                          children: [],
                                          val: 11,
                                        },
                                      ],
                                      val: 46,
                                    },
                                    {
                                      $id: '14',
                                      children: [],
                                      val: 65,
                                    },
                                    {
                                      $id: '15',
                                      children: [
                                        {
                                          $id: '16',
                                          children: [
                                            {
                                              $id: '17',
                                              children: [
                                                {
                                                  $id: '18',
                                                  children: [],
                                                  val: 41,
                                                },
                                                {
                                                  $id: '19',
                                                  children: [],
                                                  val: 65,
                                                },
                                                {
                                                  $id: '20',
                                                  children: [],
                                                  val: 52,
                                                },
                                              ],
                                              val: 79,
                                            },
                                            {
                                              $id: '21',
                                              children: [
                                                {
                                                  $id: '22',
                                                  children: [],
                                                  val: 39,
                                                },
                                                {
                                                  $id: '23',
                                                  children: [],
                                                  val: 39,
                                                },
                                                {
                                                  $id: '24',
                                                  children: [],
                                                  val: 20,
                                                },
                                              ],
                                              val: 50,
                                            },
                                            {
                                              $id: '25',
                                              children: [],
                                              val: 69,
                                            },
                                          ],
                                          val: 96,
                                        },
                                      ],
                                      val: 23,
                                    },
                                  ],
                                  val: 9,
                                },
                                {
                                  $id: '26',
                                  children: [
                                    {
                                      $id: '27',
                                      children: [
                                        {
                                          $id: '28',
                                          children: [
                                            {
                                              $id: '29',
                                              children: [],
                                              val: 94,
                                            },
                                          ],
                                          val: 29,
                                        },
                                      ],
                                      val: 47,
                                    },
                                    {
                                      $id: '30',
                                      children: [
                                        {
                                          $id: '31',
                                          children: [],
                                          val: 75,
                                        },
                                        {
                                          $id: '32',
                                          children: [
                                            {
                                              $id: '33',
                                              children: [],
                                              val: 20,
                                            },
                                            {
                                              $id: '34',
                                              children: [
                                                {
                                                  $id: '35',
                                                  children: [],
                                                  val: 6,
                                                },
                                                {
                                                  $id: '36',
                                                  children: [],
                                                  val: 77,
                                                },
                                                {
                                                  $id: '37',
                                                  children: [],
                                                  val: 83,
                                                },
                                              ],
                                              val: 3,
                                            },
                                          ],
                                          val: 40,
                                        },
                                        {
                                          $id: '38',
                                          children: [
                                            {
                                              $id: '39',
                                              children: [
                                                {
                                                  $id: '40',
                                                  children: [],
                                                  val: 11,
                                                },
                                                {
                                                  $id: '41',
                                                  children: [],
                                                  val: 97,
                                                },
                                              ],
                                              val: 24,
                                            },
                                            {
                                              $id: '42',
                                              children: [
                                                {
                                                  $id: '43',
                                                  children: [],
                                                  val: 81,
                                                },
                                              ],
                                              val: 87,
                                            },
                                          ],
                                          val: 15,
                                        },
                                      ],
                                      val: 87,
                                    },
                                  ],
                                  val: 27,
                                },
                              ],
                              val: 73,
                            },
                            {
                              $id: '44',
                              children: [
                                {
                                  $id: '45',
                                  children: [
                                    {
                                      $id: '46',
                                      children: [
                                        {
                                          $id: '47',
                                          children: [
                                            {
                                              $id: '48',
                                              children: [],
                                              val: 52,
                                            },
                                            {
                                              $id: '49',
                                              children: [
                                                {
                                                  $id: '50',
                                                  children: [],
                                                  val: 64,
                                                },
                                                {
                                                  $id: '51',
                                                  children: [],
                                                  val: 7,
                                                },
                                              ],
                                              val: 81,
                                            },
                                            {
                                              $id: '52',
                                              children: [
                                                {
                                                  $id: '53',
                                                  children: [],
                                                  val: 50,
                                                },
                                                {
                                                  $id: '54',
                                                  children: [],
                                                  val: 9,
                                                },
                                                {
                                                  $id: '55',
                                                  children: [],
                                                  val: 0,
                                                },
                                              ],
                                              val: 33,
                                            },
                                          ],
                                          val: 93,
                                        },
                                      ],
                                      val: 92,
                                    },
                                    {
                                      $id: '56',
                                      children: [
                                        {
                                          $id: '57',
                                          children: [],
                                          val: 21,
                                        },
                                        {
                                          $id: '58',
                                          children: [],
                                          val: 13,
                                        },
                                      ],
                                      val: 41,
                                    },
                                    {
                                      $id: '59',
                                      children: [],
                                      val: 29,
                                    },
                                  ],
                                  val: 36,
                                },
                              ],
                              val: 31,
                            },
                          ],
                          val: 42,
                        },
                      ],
                      val: 59,
                    },
                    {
                      $id: '60',
                      children: [
                        {
                          $id: '61',
                          children: [
                            {
                              $id: '62',
                              children: [
                                {
                                  $id: '63',
                                  children: [],
                                  val: 98,
                                },
                                {
                                  $id: '64',
                                  children: [
                                    {
                                      $id: '65',
                                      children: [],
                                      val: 96,
                                    },
                                    {
                                      $id: '66',
                                      children: [
                                        {
                                          $id: '67',
                                          children: [
                                            {
                                              $id: '68',
                                              children: [
                                                {
                                                  $id: '69',
                                                  children: [],
                                                  val: 47,
                                                },
                                                {
                                                  $id: '70',
                                                  children: [],
                                                  val: 76,
                                                },
                                                {
                                                  $id: '71',
                                                  children: [],
                                                  val: 34,
                                                },
                                              ],
                                              val: 57,
                                            },
                                            {
                                              $id: '72',
                                              children: [],
                                              val: 90,
                                            },
                                            {
                                              $id: '73',
                                              children: [
                                                {
                                                  $id: '74',
                                                  children: [],
                                                  val: 30,
                                                },
                                                {
                                                  $id: '75',
                                                  children: [],
                                                  val: 16,
                                                },
                                              ],
                                              val: 21,
                                            },
                                          ],
                                          val: 83,
                                        },
                                        {
                                          $id: '76',
                                          children: [
                                            {
                                              $id: '77',
                                              children: [],
                                              val: 56,
                                            },
                                          ],
                                          val: 59,
                                        },
                                        {
                                          $id: '78',
                                          children: [
                                            {
                                              $id: '79',
                                              children: [],
                                              val: 52,
                                            },
                                            {
                                              $id: '80',
                                              children: [
                                                {
                                                  $id: '81',
                                                  children: [],
                                                  val: 3,
                                                },
                                                {
                                                  $id: '82',
                                                  children: [],
                                                  val: 94,
                                                },
                                                {
                                                  $id: '83',
                                                  children: [],
                                                  val: 53,
                                                },
                                              ],
                                              val: 66,
                                            },
                                          ],
                                          val: 59,
                                        },
                                      ],
                                      val: 14,
                                    },
                                  ],
                                  val: 10,
                                },
                              ],
                              val: 30,
                            },
                            {
                              $id: '84',
                              children: [],
                              val: 66,
                            },
                            {
                              $id: '85',
                              children: [],
                              val: 50,
                            },
                          ],
                          val: 38,
                        },
                        {
                          $id: '86',
                          children: [
                            {
                              $id: '87',
                              children: [
                                {
                                  $id: '88',
                                  children: [
                                    {
                                      $id: '89',
                                      children: [
                                        {
                                          $id: '90',
                                          children: [
                                            {
                                              $id: '91',
                                              children: [
                                                {
                                                  $id: '92',
                                                  children: [],
                                                  val: 61,
                                                },
                                                {
                                                  $id: '93',
                                                  children: [],
                                                  val: 23,
                                                },
                                              ],
                                              val: 76,
                                            },
                                            {
                                              $id: '94',
                                              children: [
                                                {
                                                  $id: '95',
                                                  children: [],
                                                  val: 100,
                                                },
                                                {
                                                  $id: '96',
                                                  children: [],
                                                  val: 12,
                                                },
                                              ],
                                              val: 94,
                                            },
                                          ],
                                          val: 72,
                                        },
                                      ],
                                      val: 79,
                                    },
                                    {
                                      $id: '97',
                                      children: [
                                        {
                                          $id: '98',
                                          children: [
                                            {
                                              $id: '99',
                                              children: [
                                                {
                                                  $id: '100',
                                                  children: [],
                                                  val: 77,
                                                },
                                                {
                                                  $id: '101',
                                                  children: [],
                                                  val: 6,
                                                },
                                              ],
                                              val: 78,
                                            },
                                            {
                                              $id: '102',
                                              children: [
                                                {
                                                  $id: '103',
                                                  children: [],
                                                  val: 32,
                                                },
                                                {
                                                  $id: '104',
                                                  children: [],
                                                  val: 5,
                                                },
                                              ],
                                              val: 85,
                                            },
                                          ],
                                          val: 100,
                                        },
                                        {
                                          $id: '105',
                                          children: [
                                            {
                                              $id: '106',
                                              children: [],
                                              val: 65,
                                            },
                                            {
                                              $id: '107',
                                              children: [
                                                {
                                                  $id: '108',
                                                  children: [],
                                                  val: 82,
                                                },
                                                {
                                                  $id: '109',
                                                  children: [],
                                                  val: 50,
                                                },
                                                {
                                                  $id: '110',
                                                  children: [],
                                                  val: 47,
                                                },
                                              ],
                                              val: 91,
                                            },
                                          ],
                                          val: 98,
                                        },
                                      ],
                                      val: 41,
                                    },
                                  ],
                                  val: 98,
                                },
                              ],
                              val: 34,
                            },
                          ],
                          val: 99,
                        },
                        {
                          $id: '111',
                          children: [
                            {
                              $id: '112',
                              children: [
                                {
                                  $id: '113',
                                  children: [],
                                  val: 68,
                                },
                                {
                                  $id: '114',
                                  children: [
                                    {
                                      $id: '115',
                                      children: [],
                                      val: 90,
                                    },
                                    {
                                      $id: '116',
                                      children: [
                                        {
                                          $id: '117',
                                          children: [
                                            {
                                              $id: '118',
                                              children: [
                                                {
                                                  $id: '119',
                                                  children: [],
                                                  val: 76,
                                                },
                                                {
                                                  $id: '120',
                                                  children: [],
                                                  val: 39,
                                                },
                                                {
                                                  $id: '121',
                                                  children: [],
                                                  val: 72,
                                                },
                                              ],
                                              val: 19,
                                            },
                                          ],
                                          val: 41,
                                        },
                                      ],
                                      val: 32,
                                    },
                                  ],
                                  val: 4,
                                },
                              ],
                              val: 5,
                            },
                            {
                              $id: '122',
                              children: [],
                              val: 11,
                            },
                            {
                              $id: '123',
                              children: [
                                {
                                  $id: '124',
                                  children: [
                                    {
                                      $id: '125',
                                      children: [],
                                      val: 92,
                                    },
                                    {
                                      $id: '126',
                                      children: [
                                        {
                                          $id: '127',
                                          children: [
                                            {
                                              $id: '128',
                                              children: [],
                                              val: 71,
                                            },
                                          ],
                                          val: 2,
                                        },
                                        {
                                          $id: '129',
                                          children: [],
                                          val: 96,
                                        },
                                        {
                                          $id: '130',
                                          children: [
                                            {
                                              $id: '131',
                                              children: [
                                                {
                                                  $id: '132',
                                                  children: [],
                                                  val: 84,
                                                },
                                                {
                                                  $id: '133',
                                                  children: [],
                                                  val: 8,
                                                },
                                              ],
                                              val: 84,
                                            },
                                            {
                                              $id: '134',
                                              children: [
                                                {
                                                  $id: '135',
                                                  children: [],
                                                  val: 21,
                                                },
                                                {
                                                  $id: '136',
                                                  children: [],
                                                  val: 49,
                                                },
                                              ],
                                              val: 36,
                                            },
                                          ],
                                          val: 16,
                                        },
                                      ],
                                      val: 51,
                                    },
                                  ],
                                  val: 1,
                                },
                              ],
                              val: 60,
                            },
                          ],
                          val: 54,
                        },
                      ],
                      val: 86,
                    },
                    {
                      $id: '137',
                      children: [
                        {
                          $id: '138',
                          children: [],
                          val: 21,
                        },
                        {
                          $id: '139',
                          children: [
                            {
                              $id: '140',
                              children: [
                                {
                                  $id: '141',
                                  children: [
                                    {
                                      $id: '142',
                                      children: [
                                        {
                                          $id: '143',
                                          children: [
                                            {
                                              $id: '144',
                                              children: [
                                                {
                                                  $id: '145',
                                                  children: [],
                                                  val: 17,
                                                },
                                                {
                                                  $id: '146',
                                                  children: [],
                                                  val: 12,
                                                },
                                                {
                                                  $id: '147',
                                                  children: [],
                                                  val: 16,
                                                },
                                              ],
                                              val: 38,
                                            },
                                          ],
                                          val: 40,
                                        },
                                        {
                                          $id: '148',
                                          children: [],
                                          val: 66,
                                        },
                                      ],
                                      val: 96,
                                    },
                                    {
                                      $id: '149',
                                      children: [],
                                      val: 80,
                                    },
                                    {
                                      $id: '150',
                                      children: [],
                                      val: 98,
                                    },
                                  ],
                                  val: 82,
                                },
                                {
                                  $id: '151',
                                  children: [
                                    {
                                      $id: '152',
                                      children: [
                                        {
                                          $id: '153',
                                          children: [
                                            {
                                              $id: '154',
                                              children: [
                                                {
                                                  $id: '155',
                                                  children: [],
                                                  val: 33,
                                                },
                                              ],
                                              val: 63,
                                            },
                                            {
                                              $id: '156',
                                              children: [],
                                              val: 1,
                                            },
                                            {
                                              $id: '157',
                                              children: [
                                                {
                                                  $id: '158',
                                                  children: [],
                                                  val: 2,
                                                },
                                                {
                                                  $id: '159',
                                                  children: [],
                                                  val: 57,
                                                },
                                              ],
                                              val: 71,
                                            },
                                          ],
                                          val: 32,
                                        },
                                      ],
                                      val: 86,
                                    },
                                  ],
                                  val: 78,
                                },
                              ],
                              val: 32,
                            },
                            {
                              $id: '160',
                              children: [],
                              val: 97,
                            },
                            {
                              $id: '161',
                              children: [
                                {
                                  $id: '162',
                                  children: [],
                                  val: 87,
                                },
                                {
                                  $id: '163',
                                  children: [
                                    {
                                      $id: '164',
                                      children: [
                                        {
                                          $id: '165',
                                          children: [
                                            {
                                              $id: '166',
                                              children: [
                                                {
                                                  $id: '167',
                                                  children: [],
                                                  val: 60,
                                                },
                                                {
                                                  $id: '168',
                                                  children: [],
                                                  val: 24,
                                                },
                                              ],
                                              val: 38,
                                            },
                                            {
                                              $id: '169',
                                              children: [
                                                {
                                                  $id: '170',
                                                  children: [],
                                                  val: 88,
                                                },
                                                {
                                                  $id: '171',
                                                  children: [],
                                                  val: 27,
                                                },
                                              ],
                                              val: 93,
                                            },
                                          ],
                                          val: 99,
                                        },
                                        {
                                          $id: '172',
                                          children: [
                                            {
                                              $id: '173',
                                              children: [],
                                              val: 27,
                                            },
                                          ],
                                          val: 2,
                                        },
                                        {
                                          $id: '174',
                                          children: [
                                            {
                                              $id: '175',
                                              children: [],
                                              val: 50,
                                            },
                                          ],
                                          val: 54,
                                        },
                                      ],
                                      val: 53,
                                    },
                                    {
                                      $id: '176',
                                      children: [
                                        {
                                          $id: '177',
                                          children: [
                                            {
                                              $id: '178',
                                              children: [
                                                {
                                                  $id: '179',
                                                  children: [],
                                                  val: 48,
                                                },
                                                {
                                                  $id: '180',
                                                  children: [],
                                                  val: 88,
                                                },
                                                {
                                                  $id: '181',
                                                  children: [],
                                                  val: 55,
                                                },
                                              ],
                                              val: 39,
                                            },
                                          ],
                                          val: 2,
                                        },
                                        {
                                          $id: '182',
                                          children: [
                                            {
                                              $id: '183',
                                              children: [
                                                {
                                                  $id: '184',
                                                  children: [],
                                                  val: 88,
                                                },
                                                {
                                                  $id: '185',
                                                  children: [],
                                                  val: 72,
                                                },
                                                {
                                                  $id: '186',
                                                  children: [],
                                                  val: 28,
                                                },
                                              ],
                                              val: 80,
                                            },
                                            {
                                              $id: '187',
                                              children: [
                                                {
                                                  $id: '188',
                                                  children: [],
                                                  val: 24,
                                                },
                                                {
                                                  $id: '189',
                                                  children: [],
                                                  val: 64,
                                                },
                                                {
                                                  $id: '190',
                                                  children: [],
                                                  val: 41,
                                                },
                                              ],
                                              val: 24,
                                            },
                                          ],
                                          val: 4,
                                        },
                                        {
                                          $id: '191',
                                          children: [
                                            {
                                              $id: '192',
                                              children: [
                                                {
                                                  $id: '193',
                                                  children: [],
                                                  val: 56,
                                                },
                                                {
                                                  $id: '194',
                                                  children: [],
                                                  val: 16,
                                                },
                                              ],
                                              val: 67,
                                            },
                                            {
                                              $id: '195',
                                              children: [
                                                {
                                                  $id: '196',
                                                  children: [],
                                                  val: 45,
                                                },
                                                {
                                                  $id: '197',
                                                  children: [],
                                                  val: 13,
                                                },
                                                {
                                                  $id: '198',
                                                  children: [],
                                                  val: 16,
                                                },
                                              ],
                                              val: 60,
                                            },
                                          ],
                                          val: 68,
                                        },
                                      ],
                                      val: 45,
                                    },
                                  ],
                                  val: 93,
                                },
                              ],
                              val: 16,
                            },
                          ],
                          val: 12,
                        },
                        {
                          $id: '199',
                          children: [
                            {
                              $id: '200',
                              children: [
                                {
                                  $id: '201',
                                  children: [
                                    {
                                      $id: '202',
                                      children: [
                                        {
                                          $id: '203',
                                          children: [
                                            {
                                              $id: '204',
                                              children: [],
                                              val: 41,
                                            },
                                            {
                                              $id: '205',
                                              children: [
                                                {
                                                  $id: '206',
                                                  children: [],
                                                  val: 64,
                                                },
                                                {
                                                  $id: '207',
                                                  children: [],
                                                  val: 19,
                                                },
                                                {
                                                  $id: '208',
                                                  children: [],
                                                  val: 35,
                                                },
                                              ],
                                              val: 19,
                                            },
                                            {
                                              $id: '209',
                                              children: [],
                                              val: 87,
                                            },
                                          ],
                                          val: 25,
                                        },
                                      ],
                                      val: 78,
                                    },
                                    {
                                      $id: '210',
                                      children: [],
                                      val: 57,
                                    },
                                    {
                                      $id: '211',
                                      children: [
                                        {
                                          $id: '212',
                                          children: [
                                            {
                                              $id: '213',
                                              children: [
                                                {
                                                  $id: '214',
                                                  children: [],
                                                  val: 45,
                                                },
                                                {
                                                  $id: '215',
                                                  children: [],
                                                  val: 81,
                                                },
                                              ],
                                              val: 29,
                                            },
                                            {
                                              $id: '216',
                                              children: [
                                                {
                                                  $id: '217',
                                                  children: [],
                                                  val: 6,
                                                },
                                                {
                                                  $id: '218',
                                                  children: [],
                                                  val: 29,
                                                },
                                                {
                                                  $id: '219',
                                                  children: [],
                                                  val: 84,
                                                },
                                              ],
                                              val: 86,
                                            },
                                            {
                                              $id: '220',
                                              children: [
                                                {
                                                  $id: '221',
                                                  children: [],
                                                  val: 66,
                                                },
                                              ],
                                              val: 98,
                                            },
                                          ],
                                          val: 27,
                                        },
                                        {
                                          $id: '222',
                                          children: [
                                            {
                                              $id: '223',
                                              children: [],
                                              val: 79,
                                            },
                                            {
                                              $id: '224',
                                              children: [],
                                              val: 33,
                                            },
                                            {
                                              $id: '225',
                                              children: [],
                                              val: 57,
                                            },
                                          ],
                                          val: 8,
                                        },
                                        {
                                          $id: '226',
                                          children: [
                                            {
                                              $id: '227',
                                              children: [
                                                {
                                                  $id: '228',
                                                  children: [],
                                                  val: 65,
                                                },
                                              ],
                                              val: 89,
                                            },
                                            {
                                              $id: '229',
                                              children: [],
                                              val: 36,
                                            },
                                          ],
                                          val: 57,
                                        },
                                      ],
                                      val: 3,
                                    },
                                  ],
                                  val: 70,
                                },
                                {
                                  $id: '230',
                                  children: [
                                    {
                                      $id: '231',
                                      children: [
                                        {
                                          $id: '232',
                                          children: [
                                            {
                                              $id: '233',
                                              children: [
                                                {
                                                  $id: '234',
                                                  children: [],
                                                  val: 19,
                                                },
                                                {
                                                  $id: '235',
                                                  children: [],
                                                  val: 61,
                                                },
                                              ],
                                              val: 30,
                                            },
                                          ],
                                          val: 42,
                                        },
                                      ],
                                      val: 98,
                                    },
                                    {
                                      $id: '236',
                                      children: [
                                        {
                                          $id: '237',
                                          children: [
                                            {
                                              $id: '238',
                                              children: [],
                                              val: 13,
                                            },
                                          ],
                                          val: 25,
                                        },
                                        {
                                          $id: '239',
                                          children: [
                                            {
                                              $id: '240',
                                              children: [],
                                              val: 17,
                                            },
                                            {
                                              $id: '241',
                                              children: [
                                                {
                                                  $id: '242',
                                                  children: [],
                                                  val: 68,
                                                },
                                                {
                                                  $id: '243',
                                                  children: [],
                                                  val: 50,
                                                },
                                              ],
                                              val: 93,
                                            },
                                          ],
                                          val: 48,
                                        },
                                      ],
                                      val: 6,
                                    },
                                  ],
                                  val: 73,
                                },
                                {
                                  $id: '244',
                                  children: [],
                                  val: 69,
                                },
                              ],
                              val: 27,
                            },
                          ],
                          val: 23,
                        },
                      ],
                      val: 0,
                    },
                  ],
                  val: 45,
                },
              ],
              val: 64,
            },
          ],
          val: 0,
        },
        {
          $id: '245',
          children: [
            {
              $id: '246',
              children: [
                {
                  $id: '247',
                  children: [],
                  val: 2,
                },
                {
                  $id: '248',
                  children: [
                    {
                      $id: '249',
                      children: [
                        {
                          $id: '250',
                          children: [],
                          val: 34,
                        },
                        {
                          $id: '251',
                          children: [
                            {
                              $id: '252',
                              children: [
                                {
                                  $id: '253',
                                  children: [
                                    {
                                      $id: '254',
                                      children: [
                                        {
                                          $id: '255',
                                          children: [],
                                          val: 28,
                                        },
                                        {
                                          $id: '256',
                                          children: [],
                                          val: 17,
                                        },
                                        {
                                          $id: '257',
                                          children: [],
                                          val: 99,
                                        },
                                      ],
                                      val: 70,
                                    },
                                  ],
                                  val: 18,
                                },
                                {
                                  $id: '258',
                                  children: [
                                    {
                                      $id: '259',
                                      children: [
                                        {
                                          $id: '260',
                                          children: [],
                                          val: 84,
                                        },
                                        {
                                          $id: '261',
                                          children: [
                                            {
                                              $id: '262',
                                              children: [
                                                {
                                                  $id: '263',
                                                  children: [],
                                                  val: 14,
                                                },
                                              ],
                                              val: 17,
                                            },
                                          ],
                                          val: 64,
                                        },
                                        {
                                          $id: '264',
                                          children: [
                                            {
                                              $id: '265',
                                              children: [],
                                              val: 79,
                                            },
                                          ],
                                          val: 86,
                                        },
                                      ],
                                      val: 27,
                                    },
                                    {
                                      $id: '266',
                                      children: [
                                        {
                                          $id: '267',
                                          children: [
                                            {
                                              $id: '268',
                                              children: [
                                                {
                                                  $id: '269',
                                                  children: [],
                                                  val: 11,
                                                },
                                              ],
                                              val: 44,
                                            },
                                          ],
                                          val: 22,
                                        },
                                      ],
                                      val: 14,
                                    },
                                    {
                                      $id: '270',
                                      children: [
                                        {
                                          $id: '271',
                                          children: [
                                            {
                                              $id: '272',
                                              children: [
                                                {
                                                  $id: '273',
                                                  children: [],
                                                  val: 68,
                                                },
                                                {
                                                  $id: '274',
                                                  children: [],
                                                  val: 66,
                                                },
                                                {
                                                  $id: '275',
                                                  children: [],
                                                  val: 23,
                                                },
                                              ],
                                              val: 34,
                                            },
                                          ],
                                          val: 7,
                                        },
                                        {
                                          $id: '276',
                                          children: [
                                            {
                                              $id: '277',
                                              children: [],
                                              val: 12,
                                            },
                                            {
                                              $id: '278',
                                              children: [
                                                {
                                                  $id: '279',
                                                  children: [],
                                                  val: 33,
                                                },
                                                {
                                                  $id: '280',
                                                  children: [],
                                                  val: 79,
                                                },
                                              ],
                                              val: 3,
                                            },
                                            {
                                              $id: '281',
                                              children: [
                                                {
                                                  $id: '282',
                                                  children: [],
                                                  val: 63,
                                                },
                                              ],
                                              val: 54,
                                            },
                                          ],
                                          val: 42,
                                        },
                                        {
                                          $id: '283',
                                          children: [],
                                          val: 28,
                                        },
                                      ],
                                      val: 42,
                                    },
                                  ],
                                  val: 15,
                                },
                              ],
                              val: 34,
                            },
                            {
                              $id: '284',
                              children: [
                                {
                                  $id: '285',
                                  children: [
                                    {
                                      $id: '286',
                                      children: [
                                        {
                                          $id: '287',
                                          children: [],
                                          val: 40,
                                        },
                                        {
                                          $id: '288',
                                          children: [
                                            {
                                              $id: '289',
                                              children: [],
                                              val: 71,
                                            },
                                            {
                                              $id: '290',
                                              children: [
                                                {
                                                  $id: '291',
                                                  children: [],
                                                  val: 74,
                                                },
                                                {
                                                  $id: '292',
                                                  children: [],
                                                  val: 71,
                                                },
                                              ],
                                              val: 33,
                                            },
                                          ],
                                          val: 59,
                                        },
                                        {
                                          $id: '293',
                                          children: [
                                            {
                                              $id: '294',
                                              children: [
                                                {
                                                  $id: '295',
                                                  children: [],
                                                  val: 49,
                                                },
                                              ],
                                              val: 9,
                                            },
                                            {
                                              $id: '296',
                                              children: [
                                                {
                                                  $id: '297',
                                                  children: [],
                                                  val: 1,
                                                },
                                              ],
                                              val: 0,
                                            },
                                          ],
                                          val: 14,
                                        },
                                      ],
                                      val: 24,
                                    },
                                  ],
                                  val: 19,
                                },
                              ],
                              val: 92,
                            },
                          ],
                          val: 39,
                        },
                      ],
                      val: 100,
                    },
                    {
                      $id: '298',
                      children: [],
                      val: 99,
                    },
                    {
                      $id: '299',
                      children: [],
                      val: 67,
                    },
                  ],
                  val: 9,
                },
                {
                  $id: '300',
                  children: [
                    {
                      $id: '301',
                      children: [],
                      val: 69,
                    },
                    {
                      $id: '302',
                      children: [],
                      val: 79,
                    },
                    {
                      $id: '303',
                      children: [
                        {
                          $id: '304',
                          children: [
                            {
                              $id: '305',
                              children: [
                                {
                                  $id: '306',
                                  children: [
                                    {
                                      $id: '307',
                                      children: [
                                        {
                                          $id: '308',
                                          children: [
                                            {
                                              $id: '309',
                                              children: [
                                                {
                                                  $id: '310',
                                                  children: [],
                                                  val: 18,
                                                },
                                                {
                                                  $id: '311',
                                                  children: [],
                                                  val: 7,
                                                },
                                                {
                                                  $id: '312',
                                                  children: [],
                                                  val: 58,
                                                },
                                              ],
                                              val: 89,
                                            },
                                            {
                                              $id: '313',
                                              children: [
                                                {
                                                  $id: '314',
                                                  children: [],
                                                  val: 40,
                                                },
                                                {
                                                  $id: '315',
                                                  children: [],
                                                  val: 34,
                                                },
                                              ],
                                              val: 0,
                                            },
                                          ],
                                          val: 6,
                                        },
                                        {
                                          $id: '316',
                                          children: [
                                            {
                                              $id: '317',
                                              children: [
                                                {
                                                  $id: '318',
                                                  children: [],
                                                  val: 37,
                                                },
                                                {
                                                  $id: '319',
                                                  children: [],
                                                  val: 44,
                                                },
                                              ],
                                              val: 0,
                                            },
                                          ],
                                          val: 12,
                                        },
                                        {
                                          $id: '320',
                                          children: [
                                            {
                                              $id: '321',
                                              children: [],
                                              val: 80,
                                            },
                                            {
                                              $id: '322',
                                              children: [
                                                {
                                                  $id: '323',
                                                  children: [],
                                                  val: 89,
                                                },
                                              ],
                                              val: 14,
                                            },
                                          ],
                                          val: 42,
                                        },
                                      ],
                                      val: 37,
                                    },
                                    {
                                      $id: '324',
                                      children: [],
                                      val: 91,
                                    },
                                  ],
                                  val: 100,
                                },
                                {
                                  $id: '325',
                                  children: [
                                    {
                                      $id: '326',
                                      children: [],
                                      val: 38,
                                    },
                                    {
                                      $id: '327',
                                      children: [],
                                      val: 48,
                                    },
                                    {
                                      $id: '328',
                                      children: [],
                                      val: 8,
                                    },
                                  ],
                                  val: 64,
                                },
                              ],
                              val: 66,
                            },
                            {
                              $id: '329',
                              children: [
                                {
                                  $id: '330',
                                  children: [],
                                  val: 40,
                                },
                                {
                                  $id: '331',
                                  children: [
                                    {
                                      $id: '332',
                                      children: [
                                        {
                                          $id: '333',
                                          children: [
                                            {
                                              $id: '334',
                                              children: [
                                                {
                                                  $id: '335',
                                                  children: [],
                                                  val: 88,
                                                },
                                              ],
                                              val: 52,
                                            },
                                          ],
                                          val: 75,
                                        },
                                      ],
                                      val: 56,
                                    },
                                    {
                                      $id: '336',
                                      children: [
                                        {
                                          $id: '337',
                                          children: [
                                            {
                                              $id: '338',
                                              children: [],
                                              val: 45,
                                            },
                                            {
                                              $id: '339',
                                              children: [
                                                {
                                                  $id: '340',
                                                  children: [],
                                                  val: 69,
                                                },
                                              ],
                                              val: 18,
                                            },
                                          ],
                                          val: 12,
                                        },
                                      ],
                                      val: 32,
                                    },
                                    {
                                      $id: '341',
                                      children: [
                                        {
                                          $id: '342',
                                          children: [
                                            {
                                              $id: '343',
                                              children: [
                                                {
                                                  $id: '344',
                                                  children: [],
                                                  val: 80,
                                                },
                                                {
                                                  $id: '345',
                                                  children: [],
                                                  val: 64,
                                                },
                                              ],
                                              val: 89,
                                            },
                                          ],
                                          val: 78,
                                        },
                                        {
                                          $id: '346',
                                          children: [],
                                          val: 10,
                                        },
                                        {
                                          $id: '347',
                                          children: [
                                            {
                                              $id: '348',
                                              children: [
                                                {
                                                  $id: '349',
                                                  children: [],
                                                  val: 0,
                                                },
                                                {
                                                  $id: '350',
                                                  children: [],
                                                  val: 34,
                                                },
                                                {
                                                  $id: '351',
                                                  children: [],
                                                  val: 11,
                                                },
                                              ],
                                              val: 13,
                                            },
                                          ],
                                          val: 61,
                                        },
                                      ],
                                      val: 53,
                                    },
                                  ],
                                  val: 52,
                                },
                              ],
                              val: 39,
                            },
                            {
                              $id: '352',
                              children: [
                                {
                                  $id: '353',
                                  children: [
                                    {
                                      $id: '354',
                                      children: [
                                        {
                                          $id: '355',
                                          children: [
                                            {
                                              $id: '356',
                                              children: [
                                                {
                                                  $id: '357',
                                                  children: [],
                                                  val: 69,
                                                },
                                                {
                                                  $id: '358',
                                                  children: [],
                                                  val: 40,
                                                },
                                                {
                                                  $id: '359',
                                                  children: [],
                                                  val: 81,
                                                },
                                              ],
                                              val: 71,
                                            },
                                            {
                                              $id: '360',
                                              children: [
                                                {
                                                  $id: '361',
                                                  children: [],
                                                  val: 42,
                                                },
                                                {
                                                  $id: '362',
                                                  children: [],
                                                  val: 71,
                                                },
                                              ],
                                              val: 46,
                                            },
                                            {
                                              $id: '363',
                                              children: [
                                                {
                                                  $id: '364',
                                                  children: [],
                                                  val: 42,
                                                },
                                                {
                                                  $id: '365',
                                                  children: [],
                                                  val: 10,
                                                },
                                              ],
                                              val: 91,
                                            },
                                          ],
                                          val: 40,
                                        },
                                      ],
                                      val: 33,
                                    },
                                  ],
                                  val: 49,
                                },
                                {
                                  $id: '366',
                                  children: [
                                    {
                                      $id: '367',
                                      children: [
                                        {
                                          $id: '368',
                                          children: [],
                                          val: 52,
                                        },
                                      ],
                                      val: 55,
                                    },
                                    {
                                      $id: '369',
                                      children: [],
                                      val: 8,
                                    },
                                    {
                                      $id: '370',
                                      children: [],
                                      val: 75,
                                    },
                                  ],
                                  val: 78,
                                },
                              ],
                              val: 85,
                            },
                          ],
                          val: 100,
                        },
                        {
                          $id: '371',
                          children: [
                            {
                              $id: '372',
                              children: [
                                {
                                  $id: '373',
                                  children: [
                                    {
                                      $id: '374',
                                      children: [
                                        {
                                          $id: '375',
                                          children: [
                                            {
                                              $id: '376',
                                              children: [],
                                              val: 1,
                                            },
                                            {
                                              $id: '377',
                                              children: [
                                                {
                                                  $id: '378',
                                                  children: [],
                                                  val: 98,
                                                },
                                                {
                                                  $id: '379',
                                                  children: [],
                                                  val: 49,
                                                },
                                                {
                                                  $id: '380',
                                                  children: [],
                                                  val: 17,
                                                },
                                              ],
                                              val: 77,
                                            },
                                            {
                                              $id: '381',
                                              children: [
                                                {
                                                  $id: '382',
                                                  children: [],
                                                  val: 42,
                                                },
                                                {
                                                  $id: '383',
                                                  children: [],
                                                  val: 96,
                                                },
                                              ],
                                              val: 52,
                                            },
                                          ],
                                          val: 54,
                                        },
                                        {
                                          $id: '384',
                                          children: [
                                            {
                                              $id: '385',
                                              children: [
                                                {
                                                  $id: '386',
                                                  children: [],
                                                  val: 16,
                                                },
                                                {
                                                  $id: '387',
                                                  children: [],
                                                  val: 64,
                                                },
                                              ],
                                              val: 5,
                                            },
                                          ],
                                          val: 56,
                                        },
                                      ],
                                      val: 17,
                                    },
                                    {
                                      $id: '388',
                                      children: [
                                        {
                                          $id: '389',
                                          children: [
                                            {
                                              $id: '390',
                                              children: [
                                                {
                                                  $id: '391',
                                                  children: [],
                                                  val: 92,
                                                },
                                              ],
                                              val: 36,
                                            },
                                          ],
                                          val: 26,
                                        },
                                        {
                                          $id: '392',
                                          children: [
                                            {
                                              $id: '393',
                                              children: [
                                                {
                                                  $id: '394',
                                                  children: [],
                                                  val: 39,
                                                },
                                                {
                                                  $id: '395',
                                                  children: [],
                                                  val: 41,
                                                },
                                              ],
                                              val: 47,
                                            },
                                            {
                                              $id: '396',
                                              children: [
                                                {
                                                  $id: '397',
                                                  children: [],
                                                  val: 43,
                                                },
                                                {
                                                  $id: '398',
                                                  children: [],
                                                  val: 84,
                                                },
                                              ],
                                              val: 65,
                                            },
                                            {
                                              $id: '399',
                                              children: [],
                                              val: 69,
                                            },
                                          ],
                                          val: 53,
                                        },
                                      ],
                                      val: 39,
                                    },
                                    {
                                      $id: '400',
                                      children: [
                                        {
                                          $id: '401',
                                          children: [],
                                          val: 82,
                                        },
                                      ],
                                      val: 92,
                                    },
                                  ],
                                  val: 35,
                                },
                              ],
                              val: 6,
                            },
                          ],
                          val: 82,
                        },
                      ],
                      val: 24,
                    },
                  ],
                  val: 22,
                },
              ],
              val: 69,
            },
            {
              $id: '402',
              children: [
                {
                  $id: '403',
                  children: [
                    {
                      $id: '404',
                      children: [
                        {
                          $id: '405',
                          children: [
                            {
                              $id: '406',
                              children: [],
                              val: 66,
                            },
                          ],
                          val: 81,
                        },
                        {
                          $id: '407',
                          children: [
                            {
                              $id: '408',
                              children: [
                                {
                                  $id: '409',
                                  children: [],
                                  val: 38,
                                },
                                {
                                  $id: '410',
                                  children: [
                                    {
                                      $id: '411',
                                      children: [],
                                      val: 60,
                                    },
                                    {
                                      $id: '412',
                                      children: [
                                        {
                                          $id: '413',
                                          children: [
                                            {
                                              $id: '414',
                                              children: [
                                                {
                                                  $id: '415',
                                                  children: [],
                                                  val: 32,
                                                },
                                                {
                                                  $id: '416',
                                                  children: [],
                                                  val: 57,
                                                },
                                                {
                                                  $id: '417',
                                                  children: [],
                                                  val: 50,
                                                },
                                              ],
                                              val: 83,
                                            },
                                            {
                                              $id: '418',
                                              children: [
                                                {
                                                  $id: '419',
                                                  children: [],
                                                  val: 68,
                                                },
                                              ],
                                              val: 91,
                                            },
                                          ],
                                          val: 68,
                                        },
                                        {
                                          $id: '420',
                                          children: [
                                            {
                                              $id: '421',
                                              children: [],
                                              val: 59,
                                            },
                                          ],
                                          val: 59,
                                        },
                                        {
                                          $id: '422',
                                          children: [
                                            {
                                              $id: '423',
                                              children: [],
                                              val: 75,
                                            },
                                            {
                                              $id: '424',
                                              children: [
                                                {
                                                  $id: '425',
                                                  children: [],
                                                  val: 59,
                                                },
                                                {
                                                  $id: '426',
                                                  children: [],
                                                  val: 13,
                                                },
                                                {
                                                  $id: '427',
                                                  children: [],
                                                  val: 43,
                                                },
                                              ],
                                              val: 90,
                                            },
                                          ],
                                          val: 4,
                                        },
                                      ],
                                      val: 44,
                                    },
                                    {
                                      $id: '428',
                                      children: [
                                        {
                                          $id: '429',
                                          children: [
                                            {
                                              $id: '430',
                                              children: [],
                                              val: 35,
                                            },
                                          ],
                                          val: 90,
                                        },
                                      ],
                                      val: 9,
                                    },
                                  ],
                                  val: 1,
                                },
                              ],
                              val: 62,
                            },
                          ],
                          val: 41,
                        },
                      ],
                      val: 2,
                    },
                    {
                      $id: '431',
                      children: [],
                      val: 66,
                    },
                  ],
                  val: 57,
                },
                {
                  $id: '432',
                  children: [
                    {
                      $id: '433',
                      children: [],
                      val: 11,
                    },
                    {
                      $id: '434',
                      children: [
                        {
                          $id: '435',
                          children: [
                            {
                              $id: '436',
                              children: [
                                {
                                  $id: '437',
                                  children: [],
                                  val: 45,
                                },
                                {
                                  $id: '438',
                                  children: [
                                    {
                                      $id: '439',
                                      children: [
                                        {
                                          $id: '440',
                                          children: [
                                            {
                                              $id: '441',
                                              children: [
                                                {
                                                  $id: '442',
                                                  children: [],
                                                  val: 41,
                                                },
                                              ],
                                              val: 22,
                                            },
                                            {
                                              $id: '443',
                                              children: [
                                                {
                                                  $id: '444',
                                                  children: [],
                                                  val: 5,
                                                },
                                              ],
                                              val: 55,
                                            },
                                          ],
                                          val: 78,
                                        },
                                        {
                                          $id: '445',
                                          children: [
                                            {
                                              $id: '446',
                                              children: [
                                                {
                                                  $id: '447',
                                                  children: [],
                                                  val: 58,
                                                },
                                              ],
                                              val: 56,
                                            },
                                            {
                                              $id: '448',
                                              children: [
                                                {
                                                  $id: '449',
                                                  children: [],
                                                  val: 84,
                                                },
                                                {
                                                  $id: '450',
                                                  children: [],
                                                  val: 16,
                                                },
                                              ],
                                              val: 7,
                                            },
                                          ],
                                          val: 87,
                                        },
                                      ],
                                      val: 63,
                                    },
                                    {
                                      $id: '451',
                                      children: [
                                        {
                                          $id: '452',
                                          children: [
                                            {
                                              $id: '453',
                                              children: [
                                                {
                                                  $id: '454',
                                                  children: [],
                                                  val: 42,
                                                },
                                              ],
                                              val: 77,
                                            },
                                            {
                                              $id: '455',
                                              children: [
                                                {
                                                  $id: '456',
                                                  children: [],
                                                  val: 42,
                                                },
                                                {
                                                  $id: '457',
                                                  children: [],
                                                  val: 37,
                                                },
                                                {
                                                  $id: '458',
                                                  children: [],
                                                  val: 40,
                                                },
                                              ],
                                              val: 100,
                                            },
                                            {
                                              $id: '459',
                                              children: [
                                                {
                                                  $id: '460',
                                                  children: [],
                                                  val: 64,
                                                },
                                                {
                                                  $id: '461',
                                                  children: [],
                                                  val: 51,
                                                },
                                              ],
                                              val: 34,
                                            },
                                          ],
                                          val: 79,
                                        },
                                      ],
                                      val: 35,
                                    },
                                    {
                                      $id: '462',
                                      children: [
                                        {
                                          $id: '463',
                                          children: [
                                            {
                                              $id: '464',
                                              children: [
                                                {
                                                  $id: '465',
                                                  children: [],
                                                  val: 34,
                                                },
                                              ],
                                              val: 73,
                                            },
                                            {
                                              $id: '466',
                                              children: [
                                                {
                                                  $id: '467',
                                                  children: [],
                                                  val: 4,
                                                },
                                              ],
                                              val: 23,
                                            },
                                          ],
                                          val: 85,
                                        },
                                      ],
                                      val: 11,
                                    },
                                  ],
                                  val: 21,
                                },
                                {
                                  $id: '468',
                                  children: [
                                    {
                                      $id: '469',
                                      children: [
                                        {
                                          $id: '470',
                                          children: [
                                            {
                                              $id: '471',
                                              children: [
                                                {
                                                  $id: '472',
                                                  children: [],
                                                  val: 61,
                                                },
                                                {
                                                  $id: '473',
                                                  children: [],
                                                  val: 27,
                                                },
                                              ],
                                              val: 7,
                                            },
                                          ],
                                          val: 90,
                                        },
                                        {
                                          $id: '474',
                                          children: [
                                            {
                                              $id: '475',
                                              children: [
                                                {
                                                  $id: '476',
                                                  children: [],
                                                  val: 21,
                                                },
                                              ],
                                              val: 86,
                                            },
                                            {
                                              $id: '477',
                                              children: [
                                                {
                                                  $id: '478',
                                                  children: [],
                                                  val: 88,
                                                },
                                              ],
                                              val: 59,
                                            },
                                            {
                                              $id: '479',
                                              children: [
                                                {
                                                  $id: '480',
                                                  children: [],
                                                  val: 71,
                                                },
                                              ],
                                              val: 43,
                                            },
                                          ],
                                          val: 58,
                                        },
                                      ],
                                      val: 19,
                                    },
                                    {
                                      $id: '481',
                                      children: [
                                        {
                                          $id: '482',
                                          children: [
                                            {
                                              $id: '483',
                                              children: [
                                                {
                                                  $id: '484',
                                                  children: [],
                                                  val: 47,
                                                },
                                                {
                                                  $id: '485',
                                                  children: [],
                                                  val: 23,
                                                },
                                                {
                                                  $id: '486',
                                                  children: [],
                                                  val: 30,
                                                },
                                              ],
                                              val: 75,
                                            },
                                            {
                                              $id: '487',
                                              children: [],
                                              val: 98,
                                            },
                                            {
                                              $id: '488',
                                              children: [
                                                {
                                                  $id: '489',
                                                  children: [],
                                                  val: 46,
                                                },
                                              ],
                                              val: 58,
                                            },
                                          ],
                                          val: 10,
                                        },
                                      ],
                                      val: 52,
                                    },
                                    {
                                      $id: '490',
                                      children: [],
                                      val: 61,
                                    },
                                  ],
                                  val: 47,
                                },
                              ],
                              val: 60,
                            },
                          ],
                          val: 21,
                        },
                        {
                          $id: '491',
                          children: [],
                          val: 59,
                        },
                      ],
                      val: 76,
                    },
                  ],
                  val: 77,
                },
                {
                  $id: '492',
                  children: [],
                  val: 31,
                },
              ],
              val: 71,
            },
            {
              $id: '493',
              children: [
                {
                  $id: '494',
                  children: [
                    {
                      $id: '495',
                      children: [],
                      val: 95,
                    },
                    {
                      $id: '496',
                      children: [],
                      val: 58,
                    },
                    {
                      $id: '497',
                      children: [
                        {
                          $id: '498',
                          children: [
                            {
                              $id: '499',
                              children: [],
                              val: 95,
                            },
                            {
                              $id: '500',
                              children: [
                                {
                                  $id: '501',
                                  children: [
                                    {
                                      $id: '502',
                                      children: [
                                        {
                                          $id: '503',
                                          children: [
                                            {
                                              $id: '504',
                                              children: [
                                                {
                                                  $id: '505',
                                                  children: [],
                                                  val: 13,
                                                },
                                              ],
                                              val: 55,
                                            },
                                            {
                                              $id: '506',
                                              children: [
                                                {
                                                  $id: '507',
                                                  children: [],
                                                  val: 64,
                                                },
                                                {
                                                  $id: '508',
                                                  children: [],
                                                  val: 56,
                                                },
                                                {
                                                  $id: '509',
                                                  children: [],
                                                  val: 27,
                                                },
                                              ],
                                              val: 53,
                                            },
                                          ],
                                          val: 87,
                                        },
                                      ],
                                      val: 71,
                                    },
                                    {
                                      $id: '510',
                                      children: [
                                        {
                                          $id: '511',
                                          children: [
                                            {
                                              $id: '512',
                                              children: [
                                                {
                                                  $id: '513',
                                                  children: [],
                                                  val: 43,
                                                },
                                                {
                                                  $id: '514',
                                                  children: [],
                                                  val: 39,
                                                },
                                                {
                                                  $id: '515',
                                                  children: [],
                                                  val: 95,
                                                },
                                              ],
                                              val: 76,
                                            },
                                          ],
                                          val: 78,
                                        },
                                      ],
                                      val: 55,
                                    },
                                  ],
                                  val: 83,
                                },
                              ],
                              val: 91,
                            },
                          ],
                          val: 12,
                        },
                        {
                          $id: '516',
                          children: [
                            {
                              $id: '517',
                              children: [
                                {
                                  $id: '518',
                                  children: [
                                    {
                                      $id: '519',
                                      children: [
                                        {
                                          $id: '520',
                                          children: [
                                            {
                                              $id: '521',
                                              children: [
                                                {
                                                  $id: '522',
                                                  children: [],
                                                  val: 99,
                                                },
                                                {
                                                  $id: '523',
                                                  children: [],
                                                  val: 74,
                                                },
                                              ],
                                              val: 9,
                                            },
                                            {
                                              $id: '524',
                                              children: [
                                                {
                                                  $id: '525',
                                                  children: [],
                                                  val: 65,
                                                },
                                                {
                                                  $id: '526',
                                                  children: [],
                                                  val: 82,
                                                },
                                              ],
                                              val: 62,
                                            },
                                          ],
                                          val: 76,
                                        },
                                      ],
                                      val: 53,
                                    },
                                    {
                                      $id: '527',
                                      children: [],
                                      val: 95,
                                    },
                                    {
                                      $id: '528',
                                      children: [
                                        {
                                          $id: '529',
                                          children: [
                                            {
                                              $id: '530',
                                              children: [],
                                              val: 71,
                                            },
                                            {
                                              $id: '531',
                                              children: [
                                                {
                                                  $id: '532',
                                                  children: [],
                                                  val: 28,
                                                },
                                                {
                                                  $id: '533',
                                                  children: [],
                                                  val: 75,
                                                },
                                              ],
                                              val: 43,
                                            },
                                          ],
                                          val: 86,
                                        },
                                      ],
                                      val: 0,
                                    },
                                  ],
                                  val: 37,
                                },
                              ],
                              val: 32,
                            },
                          ],
                          val: 16,
                        },
                      ],
                      val: 78,
                    },
                  ],
                  val: 8,
                },
                {
                  $id: '534',
                  children: [
                    {
                      $id: '535',
                      children: [],
                      val: 97,
                    },
                    {
                      $id: '536',
                      children: [],
                      val: 53,
                    },
                  ],
                  val: 56,
                },
                {
                  $id: '537',
                  children: [
                    {
                      $id: '538',
                      children: [
                        {
                          $id: '539',
                          children: [],
                          val: 57,
                        },
                        {
                          $id: '540',
                          children: [
                            {
                              $id: '541',
                              children: [
                                {
                                  $id: '542',
                                  children: [],
                                  val: 8,
                                },
                                {
                                  $id: '543',
                                  children: [
                                    {
                                      $id: '544',
                                      children: [
                                        {
                                          $id: '545',
                                          children: [],
                                          val: 46,
                                        },
                                        {
                                          $id: '546',
                                          children: [
                                            {
                                              $id: '547',
                                              children: [
                                                {
                                                  $id: '548',
                                                  children: [],
                                                  val: 15,
                                                },
                                                {
                                                  $id: '549',
                                                  children: [],
                                                  val: 0,
                                                },
                                                {
                                                  $id: '550',
                                                  children: [],
                                                  val: 75,
                                                },
                                              ],
                                              val: 67,
                                            },
                                          ],
                                          val: 53,
                                        },
                                      ],
                                      val: 27,
                                    },
                                    {
                                      $id: '551',
                                      children: [
                                        {
                                          $id: '552',
                                          children: [
                                            {
                                              $id: '553',
                                              children: [
                                                {
                                                  $id: '554',
                                                  children: [],
                                                  val: 77,
                                                },
                                                {
                                                  $id: '555',
                                                  children: [],
                                                  val: 73,
                                                },
                                              ],
                                              val: 61,
                                            },
                                            {
                                              $id: '556',
                                              children: [
                                                {
                                                  $id: '557',
                                                  children: [],
                                                  val: 45,
                                                },
                                                {
                                                  $id: '558',
                                                  children: [],
                                                  val: 93,
                                                },
                                              ],
                                              val: 44,
                                            },
                                            {
                                              $id: '559',
                                              children: [
                                                {
                                                  $id: '560',
                                                  children: [],
                                                  val: 11,
                                                },
                                                {
                                                  $id: '561',
                                                  children: [],
                                                  val: 15,
                                                },
                                              ],
                                              val: 48,
                                            },
                                          ],
                                          val: 20,
                                        },
                                        {
                                          $id: '562',
                                          children: [
                                            {
                                              $id: '563',
                                              children: [],
                                              val: 69,
                                            },
                                            {
                                              $id: '564',
                                              children: [
                                                {
                                                  $id: '565',
                                                  children: [],
                                                  val: 79,
                                                },
                                                {
                                                  $id: '566',
                                                  children: [],
                                                  val: 33,
                                                },
                                                {
                                                  $id: '567',
                                                  children: [],
                                                  val: 23,
                                                },
                                              ],
                                              val: 69,
                                            },
                                          ],
                                          val: 21,
                                        },
                                        {
                                          $id: '568',
                                          children: [
                                            {
                                              $id: '569',
                                              children: [
                                                {
                                                  $id: '570',
                                                  children: [],
                                                  val: 8,
                                                },
                                                {
                                                  $id: '571',
                                                  children: [],
                                                  val: 17,
                                                },
                                                {
                                                  $id: '572',
                                                  children: [],
                                                  val: 76,
                                                },
                                              ],
                                              val: 39,
                                            },
                                          ],
                                          val: 51,
                                        },
                                      ],
                                      val: 67,
                                    },
                                  ],
                                  val: 65,
                                },
                                {
                                  $id: '573',
                                  children: [],
                                  val: 8,
                                },
                              ],
                              val: 5,
                            },
                          ],
                          val: 99,
                        },
                      ],
                      val: 100,
                    },
                  ],
                  val: 1,
                },
              ],
              val: 46,
            },
          ],
          val: 94,
        },
      ],
      val: 48,
    },
    expected: 12,
  },
];

tests.forEach(({ name, input, expected }) => {
  const result = maxDepth(input);
  if (expected === result) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
});
