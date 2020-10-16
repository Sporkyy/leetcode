// 1616. Split Two Strings to Make Palindrome
// https://leetcode.com/problems/split-two-strings-to-make-palindrome/

/*

You are given two strings a and b of the same length. Choose an index and split
both strings at the same index, splitting a into two strings: aprefix and
asuffix where a = aprefix + asuffix, and splitting b into two strings: bprefix
and bsuffix where b = bprefix + bsuffix. Check if aprefix + bsuffix or bprefix +
asuffix forms a palindrome.

When you split a string s into sprefix and ssuffix, either ssuffix or sprefix is
allowed to be empty. For example, if s = "abc", then "" + "abc", "a" + "bc",
"ab" + "c" , and "abc" + "" are valid splits.

Return true if it is possible to form a palindrome string, otherwise return
false.

Notice that x + y denotes the concatenation of strings x and y.


Constraints:

- 1 <= a.length, b.length <= 105
- a.length == b.length
- a and b consist of lowercase English letters

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 116 ms, faster than 38.22% of JavaScript online submissions
// Memory Usage: 50.8 MB, less than 5.37% of JavaScript online submissions

// const isPalindrome = s => {
//   for (let l = 0, r = s.length - 1; l < r; l++, r--)
//     if (s[l] !== s[r]) return false;
//   return true;
// };

// console.log(isPalindrome('abba'));
// console.log(isPalindrome('abcba'));
// console.log(isPalindrome('aejbaalckawkhbrtlqwblfwzfptanhiglaabjea'));

// /**
//  * @param {string} a
//  * @param {string} b
//  * @return {boolean}
//  */
// const checkPalindromeFormation = (a, b) => {
//   let l, r;

//   // Check a|a
//   [l, r] = [-1, a.length];
//   while (l < r && a[l + 1] === a[r - 1]) l++, r--;
//   // console.log(l, r);
//   if (-1 < l && isPalindrome(`${a.slice(0, r)}${a.slice(r)}`)) return true;

//   // Check b|b
//   [l, r] = [-1, b.length];
//   while (l < r && b[l + 1] === b[r - 1]) l++, r--;
//   // console.log(l, r);
//   if (-1 < l && isPalindrome(`${b.slice(0, r)}${b.slice(r)}`)) return true;

//   // Check a|b
//   [l, r] = [-1, a.length];
//   while (l < r && a[l + 1] === b[r - 1]) l++, r--;
//   // console.log(l, r);
//   // console.log(`${a.slice(0, r)}🍔${b.slice(r)}`);
//   // console.log(`${a.slice(0, l + 1)}🍔${b.slice(l + 1)}`);
//   // console.log(`${b.slice(0, r)}🍔${a.slice(r)}`);
//   // console.log(`${b.slice(0, l + 1)}🍔${a.slice(l + 1)}`);
//   if (-1 < l) {
//     if (
//       isPalindrome(`${a.slice(0, r)}${b.slice(r)}`) ||
//       isPalindrome(`${a.slice(0, l + 1)}${b.slice(l + 1)}`)
//       // isPalindrome(`${b.slice(0, r)}${a.slice(r)}`) ||
//       // isPalindrome(`${b.slice(0, l + 1)}${a.slice(l + 1)}`)
//     )
//       return true;
//   }

//   // Check b|a
//   [l, r] = [-1, b.length];
//   while (l < r && b[l + 1] === a[r - 1]) l++, r--;
//   // console.log(l, r);
//   // console.log(`${b.slice(0, r)}🍔${a.slice(r)}`);
//   // console.log(`${b.slice(0, l + 1)}🍔${a.slice(l + 1)}`);
//   if (-1 < l) {
//     if (
//       isPalindrome(`${b.slice(0, r)}${a.slice(r)}`) ||
//       isPalindrome(`${b.slice(0, l + 1)}${a.slice(l + 1)}`)
//     )
//       return true;
//   }

//   return false;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 100 ms, faster than 49.04% of JavaScript online submissions
// Memory Usage: 48.8 MB, less than 5.37% of JavaScript online submissions

/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
const checkPalindromeFormation = (a, b) => {
  // These are al the candidates to test to see if they're palindromes
  const candidates = [];
  // Include the source strings as they can form palindromes themselves
  candidates.push(a, b);

  let l, r;

  // a first
  [l, r] = [-1, a.length];
  while (l < r && a[l + 1] === b[r - 1]) l++, r--;
  if (-1 < l)
    candidates.push(
      `${a.slice(0, r)}${b.slice(r)}`,
      `${a.slice(0, l + 1)}${b.slice(l + 1)}`,
    );

  // b first
  [l, r] = [-1, b.length];
  while (l < r && b[l + 1] === a[r - 1]) l++, r--;
  if (-1 < l) {
    candidates.push(
      `${b.slice(0, r)}${a.slice(r)}`,
      `${b.slice(0, l + 1)}${a.slice(l + 1)}`,
    );
  }

  outer: for (const candidate of candidates) {
    for (let l = 0, r = candidate.length - 1; l < r; l++, r--)
      if (candidate[l] !== candidate[r]) continue outer;
    return true;
  }

  return false;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { ok } from 'assert';

// Example 1:
ok(checkPalindromeFormation('x', 'y'));
// Explanation: If either a or b are palindromes the answer is true since you
// can split in the following way:
//
// - aprefix = "", asuffix = "x"
// - bprefix = "", bsuffix = "y"
//
// Then, aprefix + bsuffix = "" + "y" = "y", which is a palindrome.

// Example 2:
ok(checkPalindromeFormation('abdef', 'fecab'));

/*

|abdef, |fecab = abdef, fecab
a|bdef, f|ecab = aecab, fbdef
ab|def, fe|cab = abcab, FEDEF
abd|ef, fec|ab = abdab, FECEF
abde|f, feca|b = abdeb, fecaf
abdef|, fecab| = fecab, abdef

*/

// Example 3:
ok(checkPalindromeFormation('ulacfd', 'jizalu'));
// Explanation: Split them at index 3:
//
// - aprefix = "ula", asuffix = "cfd"
// - bprefix = "jiz", bsuffix = "alu"
//
// Then, aprefix + bsuffix = "ula" + "alu" = "ulaalu", which is a palindrome.

// Example 4:
// ok(!checkPalindromeFormation('xbdef', 'xecab'));

ok(!checkPalindromeFormation('abda', 'acmc'));

// /*

// +-----+------+
// | pre | suff |
// |   a | bda  |
// |   a | cmc  |
// +-----+------+

// */

ok(!checkPalindromeFormation('ab', 'xy'));

ok(!checkPalindromeFormation('abc', 'xyz'));

ok(!checkPalindromeFormation('abcd', 'wxyz'));

ok(!checkPalindromeFormation('abcde', 'vwxyz'));

ok(!checkPalindromeFormation('abcdef', 'uvwxyz'));

ok(
  !checkPalindromeFormation(
    'vmycmwcstqzknprikiipneazmprkfqofcvdrkoqpwpehbhxuivbssnetsnxdaamydkkbujnlnamamepwsdehcgkheznyxdeezlcuqqjqdpgxtxejjeqxqrwjnfovelpzfpntvkfzgqgfjyrnpjawsqjshrgxvlhhztorjrfjicpoesezoxqdpyljgilaofxrzmoftsgcwffaftuzwatwhxjchjzhsipemfsqzaoylepdrinllvlqnutuqkgcaizcygifdxfhvvixdfnpqapyfdtmsixbzaspdsbypeumnxexkeceoduxfkboundpkrguydcbwpcniwcyzgldajlqijhfapkbixagdjyopmaqjtrlitayymnhuqphszbqelxfbwkkoihukkognkkkkhptxkaddsybgbepgtecodmtajuryjjsgxrfysajvqvnuloapqooczdzwovbwqpzzrncaqyinbrlxwppcaoxayibvvqkjmkranefrybjnxlvwgfknljtzhtrbpzojrivlozajttampyssdoctmyxtyjhzxflvrjzemkyouxamcdlqpneifeyxdijepaqvpxktcgrbmlanhvtuxtjmegsmspzhiclbukervpofkojaeckujzmorycwduoxstelwxwzdqppyimdojhvtpdoarbhtjpynancifsdnpbdoihbnjzivczsbvlokdeqsvxpusjlmiizpxqmvfoonbzvgqxqzoyixyzsezdozzpivzrrwtwpnjyyzjxqxeqchwcyyzvqlawtkeomjoholfdqkpcoidbtlvbhxrdlnaldketgpvckrahamahiuaqslnygytrqfiesikbsjozmtpjfqteqcrfsawykldhuecjtxrebaedyvokjzkojokjmjqkhgotukzfmojexhfhjgvonkwtdursviuotmqgloxdjwdatudzzuutmxzdfmwlooqctxuxygnyethgvgqvfrhusxinbscpjozfgqdamihlptducjzcfjqsqdgqdsumrglgkwymtxzvrumjxhdiwacprifiteudaqjwnpxzutsyohqbsnhiahbqeeksdlockadeygctmipylkcozylidypiwujcuwsxtikofwmrhxmkocplptjtonutxzcimbosotjthwqooutjpbrjdmblfkghdsxmkjmegjnejgdycgprxrzkmhtnxpxllsmqcmmcsercekxamuoswvlzhebdkxujxdtkefmofpvebxagqiqqhvviwepdoifiprlggffiwuvdghjftixtmijsjjyawuohujhjiilyrwsfiteakejhynnjhhucjxdlyauhtqpuvctlhcxxyrfsxtqrvsxtpicsyynpxakvizntavqilrszwhucbcpktgsbfkyvmoidkrfvjrjktclijajtdudypsiyrlbvleqnavupcapndxnypjagmqsbvtjirqbohnnbjeuzepjjipcklqxarbhinylvkspmuefwcfbzhiiyxgchnftoqactptnuzemrnnngsfyjtxubvocyjbvxlbeggyywdlaiokyldrbsohgivhwjemqssfzjxtwbuhyxciywpakgebtbkwmrflmjarezxrzmzrfmmmerejykpaxuzoojqfgzqjysbputcxbiajeicbfktdalzjnqianmpivdazgzmnzevuttmlnocohwrxoxipoghrnpkejzfdjensvubdtpwknlesykuvknitofqicybhinqsijqgowdjjhyjedzhwoqbtslsikvzqykqgglqaavvfoiffgnxpvrtjbmidwyqyuolkaydttfqfamovmomktpklrmnjwxdegveuvttdqrfqxqlzbhitqloiisvusapyudodxvoaygmqydoadqlajviuyuehwuncfjmhlnwgajxumihlrnoohfpsookbnxcgpoewgbkbirwnhmewiwdaxlwwmouwldvjmecnrqogydlgecmosagipxgtvxheiebhuukkanjhlkbavmccamxzztxqgeqfxdecrfyehusxpgsqcuikzouvzxfstrnigevjaydgqlukadzizbrdshpfwezzdnhexyoxvafvobzncswjzuwoyqrwumwkcxynwxtengbcyuwpevuuzogflaftyttsjnmqikxnomgrtjlwotxabimgwgpbcneeyvnkvebnligmkuvcrnjgibwhtqapfmhbtdqviwoncyksfdxqfkqtucsczgachlocusgmqowphtbcbwqsildypvvfvjkogoimcajyxseszolfmnnmrrwgoljrkpsyhpqqyldurhuzvdzmbzmcffbgkobbtjptsskhmygxzymqyqwaqnnrjbshxosnmouifhrmyykftgdqvkqvwdvwpkmhgjqgbzozmpqphqeybnzaejyqkmjxpbvyfpjcakbmievpdddwlvihadydaxovnryitkdnkhanvtwblzgnbtlhmvjkjhykbglebqufpwfskhhnlfvvrqaennlwkalltmbngeymqagoznqokzgmgawvjvrrhwsldlddxqsfyffpxdxzlvscznzsnvumrxhouiaaeirypechkxgradqnhzlqagxbjvnyrrcxhwghnbtnrmegwybdmnshbbxtqivhzrzdediwprsovezduiokrpxbwcnzmtexujwtnznygmeiyuassswwarsqpdiglgsvavfzlgkiwbsoamdgbropypbwfyggcnkmfmzzcjzezknzjnebfnfwsdhoynpzufklceqdzajrhcptekirmmwmrysissesrhgjynjnuikupnspnexcqekelvsxrlytuwvcoqhyvdspodsfbpmysmdaedfkaokmabklxigitqcsnokwqxyvhljwnsdnzplyllkszxpmpqzzcwnupcbzostppbygrcxykpjxoqitrssrevhwrdunzzhkeguqqqyxntbemikiqhapbjzdwovlycgxxhjelibqdjtgqpzgxiskxoafsbhfczaamwskjkovgmmumgmjdnkrbbwbfxxtkbpqkmdnbcxezcbcjdbuehapxpubtqazwjcxozknegefsawceiyddxaxspkibbkqxwwspyrcipeffdgchrwkscfvtcvixhoitdnabfhdaighbiqnvboahjcwvwycxstbsvjsnctsqekyxqqguurzspmsbhdlejdpffpfouuuzmrmcfdmbsztbazsxiptchbwjlzvdmaeubitalsgzffeiultzjsfilfgtzprxszjeulsalybxdjhgkwpglzamqejxwbpqdsvtoyfgfqavonvtsauvmsknkqqfxinylspkzgfnmjmncahygncoinyyffhfzkudpkiufwfloxfbeeakmatebzqyprzpzxuxophzqmbfjdqeidnrrazabwcnwxswtuweckgxzotvtursjwukrvnsheehjfklqczjhrwlearivelfkwzpsrweiwhzdlwbfchehzxpzhqakegnnvnvjcxzdsymbpjpfdakrvdibknakjqnzgnctsnmctryrzdvppkxsksuudasjvjqxnebjdcoeimbytfhdbqawnccjyqxumzorsebmtxinusdnokoizpuhxbwguvgeielawotvoshalnyjpupqhcfbuxiseulyazurhcsueemycyryxhsarityajnccdjeqjcxobrrfhugyhpbylycjxbovtdinzaqiukjbtmuxuitjmbxjjvvgeyjmmogwupuiqcvkysliqagogbzujibabjomcxjxldzidjhssacjgrlignjtcsswgwxekviatbswxbyphvfkdbbgopzmmnqklixxozegkzxbuzejdtzffghzllcrbpsskrvxdlqjjqawqwczdbcalebuispslgngtjxkuvdowbrabhfvjuegeirmqnqljostcfqttacvyrqmkuhjfdzaovzuraiwfaeatcinmqwoenqbfynvslsozzmhkdhgedklkfuogvfmqnrcilbuownudfjutlrqusszghfohlowqjwkpknfplngghwnjlcnrzpzggttetghxqosbknubfntcetjvwclglkxquqxsmszndmtrxobwdqykrvzihyqyjqvkclzgpdibbyczjnkfipqiophrqvmdjnyuthaeefetwpmcswxwlheeknjdlmahpwwkbbnedrdsbzngwzwiywtmgvnwsoppjbaiohxfyahleebnnqrhxkhjllwsxwznklqlpfcmziimqwwxcvcvfjfkbpcscrvlwdowjiqmvtrosgpyarmkmvbhllbnqevxftgkmktcelflfhzugxuwxadtraujjuzrxchgfyjtknpxqulappusszgoqpxshvypeqaadkxouulbttwcxapcexuyzmhesphuztbnixqgexazkbbrrrxvbliktyzucypgvchgwbzcqgseafzleeqcgzgjqkumwkqzowbfnfflfhjxchfdqfimhtffluxpzrtdutevbbelxphvuasgdbwumhkeijqnrwhzxniuhhdffwmalfqtyxgniyikxrblfxwgtzqmjrampesjjvzoxrzcdgpqqtfpobkprgedhuqeqvbnmhogasisujuqulvisklmacrlxfbanxltwpwlyexoxmlkikbjpkoipjeqgaslxphtqqdusovjagbydkfkpcahhowdknbxjjhwwrmoviwvtnpmsthdxvrwqoqecrriikkvqdabxattjujrqewcpfrfxmfifohlvsmdfrxdvpscbhkzgkgbnuocyksuofhdnfphmqebaobqtnjcuyjvjjxayanacxqfzjoswyxqygksbvcvkfunsosehkwtedwnledyiobdcfolpbwjgznuleekqtqzxmputrhgcqiktkogouwdezmpqwkzkjatyjcikmutsudbdeewqtcvfhrgpcakehoqhrgtdkxbgczjnyzoldzqkauzobpsirnzpzqvcarplsulofhajdqyhfktjqihpwbbcmvzjeulxdelqwkdooosffjppjoitnjkbauutatccixiagkoschaakrpfuriodategftootoftddbxbtqneviawetymjdcwxsgfnrawgwmngntkmsuboipbrkufrkdjtwdyxtavnjeswoxwijjodgaolzekbgexuhychlqxwxkemoiunclcositvphkandxjqxjnwnbnaftfibabvxzpwnpdgbtplbeiehohwvtehxkxpucaocxsunuccqxdqlxvhyxaigksqhascpinlydnibrvwvithouyrectshyqohyrjxqjrmdgyunusygpjdlfnoonyjlvlpcjvrfuqgzqptwhunybbwbyvzwwtoasmelefasakyamsyxfkvywpochybrbsnodvzrumkzlechaycedceiigrezydsinerkzgrtasyzqtuegsnugosnomeshvzkyogqplwjmaihcivogwezibsqkykzjtatxzabyhnsqlbbsydkzvhalvugaiwxmxtzzqiucbgbmgaqikcnwmvmltcsxbjinrnaewzcmougbhtmmyjbwrigmsvzjsrgtmjagjcazqwwvtyrwaxpsktgafsunmlskrbxdohqmcceulikdgszvllnsjpuopncvvgznykwtzutbcwkago',
    'puvluvckuigwvqsegzumtchvuytngbaauexvutjjidemfwhwamwasnmjmikljzbrkidyonjbymogozgdnacpqvpetkojdkoirqzayqpdwkzrqczaqsbllkmfykxenlehkcoaxtabevrbgyktaxplxlzjdytczeewuhwcsawkforwvbdaackciicsjzvlwmnoertalzgmmgkdmcxwbhvrhcutykexdskiwxteeojughulqwmrdgkooybtvdaweavejoqtertfvacsufcxymzeaalemciizocctugcoqbmdzhlwamwsmadnaknvgaftwehisiwlgihszbfpjyumgprewddlujiftmdwbsguuumetgworjwxeshomlpgxqluqszlgvpysocnchbuefqqpbsazfnhqdcozsyhtxehqevvdrrhiujqpwntprzbmxxbdkjmbmhqymonqekpowrkcmrktismuyizmhaqtmqvxyrafwnlwraoxkmyforblhehhkkuuiuovsnjfkpkvwnkmdtgywythrwqllbufigbpsbppbdhqissyltqpwdibezlppnfsilzmgrdcgoddwzpjpuevwootupamgvdlvgqafvjzfkrpybauviphbuacusxqqavphhgosdtgfcvjkcrmgciuebocluzhiypurlkfbzlpyhoyltdkqqpitxfwytpecvytqaulqlsxjfssehcvvorclitzkizjchieoxuedvdqcnfjemoedhqktjcqnfxwcqdoltwdokplflchnvbzohmspuqfsmsiryczlzzlgpuqjryjbygwnkzwlpxztnxuyiggnxjprbvrvynxelcimuzfszdcrhmgucxefnpoiddlfjtiqblebaqnbfukfintydbyzkkvicmxvulzebdgwykqtmylriymiwyjeajozxaqvphmdosqwouseggfdxmugtscybvgwcnmmlhbqzmoqebhmatjxsvbeldadjdmqsjqqhcadwmyqupofetihvstryrsgeqjixrpedbzroabxfgtlinfdbeqxhkpnzlbeukuzovafzltlowsuhqctvnqjleqarcnjoclmjnbavsatiebtlnecyvknpcundgnuegkbwfgpkcmfqpbfnhfbgawipdtyxvfsqbitjdyxloqmzalwmezvifhhzufuijcbnqdzhwrklztvskotnberxczitgmtizvtpksbhkvebjkktqsenvzynelncvkdimagqlfvhtqauieewihhhdtzdntgdfwkizumpkjgbfbylbpntatxovwqjluhscarbkcrmclzkgabusvyexoomdugpuxntecitumxffkpadgmoeodtqgxqbvwkmdtmvpbgffkuynuvvokntknjepsitbqtinpodycawhtckybesejxymvqfpwyipmzhsuqrbhwgtvxwwgxapzdpbpymkiuhxpsjerdtirncgyifrsnjrbeybddhbpbpwoidqsgvddzycmzwhszkeijyxsgejhzhzwrxjuevgypdcchuilseuzytnbhnfkgevwlakkjgnayzotehxadyrrtljsewuqvmalekmuvdvqeykvnffgtyfhcmxqrguvdkivloeodsjlgetldbcuyyzwpbseddmpbcxmyqwhpmxuvgpyhhetggnqcvsjkgskonycuuouyfkokibxzcuxuznhtyqvgjemmaickegjjuzlucxkhmjiyfonnrjipmlzgtvewzxatmauwatvqbzehysiqgcpvyakjulycucjvmognmruicawjqjlyjwpfczfgkxznoxozqnpljiuwahiaachjzbfuxcikwhxvzsxvefwzawsksibrsvditvvshdqvxbhghtzznewuesuzggyviggrpkaeeodcloylpqqeohrhnmrmaamebpnfgjzbosiydzfegxadlfkloyvrpatbnzndtjthdmahxyhrzlltgczifgtjecwqgpvckzrqlyvqbhydgzppryowowuabmczpkgzmwswooruxtyvyludwitgyvffwsmtnkcxrjjeearqsfjnyrynhjpfwhyucytsxrixnjvhrzagdzfprfzkdlmgyejnsdjggtmvuuaouwqhakiyymembdopbwqdqqsrqxnuflnxnaclnpcfdbfnvqvavkezrzaaqxmjippzrglyyhdmurtquzrbfslfoopqanuqkuwcgqdwhnvbaijuhwruumeqpigdadbwdbrerordngtilnhxkbyfmbcrlwxfewcyhrxtpfvaytagwufpgtqnuehimbdijpubzimqihqloqnjbaaispymblcbfnvfzmtkoutymfcmsjbhsrnjnuabcgwydsjcfwffacigqlohimprssaemxenpuzittvzjtvfpggixwmmrlbwartfymzqwnhxcindbvxzxradztfwhidcbndzhonkylonglgyhnawyodqwqpsfozjplcixeuognaknswfocgtroiaglrdwkrfqcjysmuspgpveznesnmzlammsuddbbjaicpdmzktlbbakoyhryuinxosrrbopnfnkwhaizbcglhuhdidgkijfayinefkxggxhjcdjcguahwadcuzjixdramxcbigszuejdzmnznvizausmqpiqagqxtywqzdyhlcbvkqgzydporlplkvnmkvnmsmtxcpsqrfiybyhnxsavcavnybbqmvfifhactcvfictpchhbyoshalwuxpwqddrkbjekwsnpfepkttclhnkpindzqplicunplxxbofyxpehalgtapazkwjcnnbovzixbfzytdthzxvsglirbbwfztoqxvqbyxkfodtxitbeosqatmxewlhorpccvdgrzepqetkwjtmhfwqmnsmywwqakpwrmxphkvxbfexuntculvfuzjozronwkosylanlnpmsxbakuoivyywgwfcwrnyeibehnktedgmdtxwoaqmsywaoziblculhynshanxwgmxqepetmudqremhfbjjsiodovdqyvndbyrgdgxrucjegdiicizhzioasvwqtvvwhygtjvefbbrkgzlavabfvokmxjofnlrutuqtzpzpolobzuljxrkjwxrenxsogwhqjazbouqrzshpssvikubhgixwwtnfgutfszunhnafrijlmjyetgvwcaeqbhutpdvizcxeevqeijbdmtsfgoopjndmmmyifglxjcuazggocdbouosasdqktwirxclkemttosussjokqijhtohvmxvkhygdhifwdjlqkcssabccgtzytzbkaphryjuvxwbguhxrstwqotstlbqwvnstgjybzjcdkmetsqapjfzvrwrdbgclgeyyakjczakrbnifmhciapytcvggxopmmeapekkcvdoayiwbfcvlistblrnouuurkpxclshlwkzoqftylnbivgxfxlctqpnrnopqfwxolqqlgffumqlxtalylapihldydbworzfocfdetmzbonjrsnesesfliolvhuytdtctqkpwdizdfihxboyqwsbvyibixnlkwjumojwofcpwhrcthjfzlgboowiktlvupebmdpnjiigjfikaquznhhafwmdsjcenbalijavnwtrjhvltrbxpwgaxtjpqifacjzwvtwxqgeukeacnreovtdqflqhephfztgyswohqlnxrgzxzbetjahcoyxginmbamqetdwoudmxndbosvuncbaxwewdnnnkqoyyfvmwpjodehbyyiryddnraphdakjkxxwvtaeqemagsojnghcrhszsbjelnbubcvaefrlvcnvpndqqypfljbilsmgvaezzmbnaakqsgkqkpcxycrsndweiczbmpinmkndjeakpjmcswarrmqyyrgfevdhaybremdjoikhsnvxzpoiengyjftmxdqezbsixfhgadmkbsykrbvbkyitzvwdzqzskvceekxxcyploydangwfmlnzoyfpphxvqbxpgcaihkdpbnnwyahlaezfkubfbiilzyddyroihuijlbxfmnlztrntlwnboufoneevtztkmtwzuskhwpwphxhlimbbjascszxpdbzesjsjlfwvpbtdssvuyqipzrkwdwchopuqvzkmmtouzfrcziaqhsqcwgmbkwoxurdlpqmgakdnfrbquznyfuoqbtiidvxgxtfzjfjryfucapzkpmzaikxfejnhtlutjcbgtxsugqbswsjmukbrtlpunvmympmvprvckwsqbycbhqqekzeibfvcutnncqytqnkvfemmqgphoffvqgguryiourganbppoexxacdkqdbwlmooaqkymcxnhppncnocnzlpjjktoxupnwohvppuajbtiyakehnrvkaojdubqyrwnpdxqgyyziylbrswmtmaiknaxarfsbgowzhdygeclncywawioyqbpoiwdxvonujawobqpbnqicitqwixfgcabojfykbihxecevmvndvrmagsddvlxudsuxxqrxjmeruoacneswilminhbhhlacfibffmiruuhcoxyqspmrkhvtshuekxprzapqtcuhdxjlujnmddnpanmvxbobsqtyqhihlwjdjzohbnttipnpndpispighljsmizrbrqdttintwawoeveelzxkrwaqclnsirnenlnhlfybzcylvugckbdjnffxfadxxxtxnsbvdqgjddrxodxijvmilgushqxjaylimuuerffmixiecbfxnqealczwafgzrabrzyormkusgrdufycxcvirrzuygahtugulvzewzqaiybtqvtqgqkihblmspbwznyvmgxiuhccxojwsdcxnsffzgmzqmlnxklmapcsrzfvhsjpizpsdaxiidnvehxbxpfmzzuohsoumyrunoeqznoejoctkiatekkvjlczpisrmshyuzfzsxdczhqsflkgfmeuivqflzttgucmykxrjbgsvuiljyeexwhbqomdiojbeyazibcqvmcjicpjulyqklkmtmvbbheznmkrsymgutrbjliknhteasvnhqjbbvjjxsnczscglcvmtmjzcupdzyvzdbtcfvprlxxfejxlctsxocyapjpborktsfaugiruekvsefsatyzvbkowsnixapcnsbgoydpamijyjyrmjestlysdayujhtglmubnvxzddcwkxitaijgavpojrzmfnthesytkpmpytyajpcszotuydjcsqgaxackdmkaxpbqdlsfbygxxucneiqvzsfveakpwxycowkkkhxkbgfcoyyztiuejzwpltxoxbaosbjfcshfybanqxllgrsuzoixeopehumfqothhlnyphvhpikevtcalkzsbxtcnnjcmlstgofokfmdyxcuantronofvwwrgmhldysamjaodogpvdmseuecvovgebrtlbenfhtjasqzfzwphmdsysikljezvmawsmpujddsreqrzdxikfbpiqdageljvwpaeilhxugvecwqedulfovzqvxquqzuzxvsvmpjdlzbnfqdvnpsiptzktjkpxerghyygwltspjddcbbvxedyptumjtnciriankuswpsyirenhtapqtcfhoaqlwjjoninivfcrlqibouyjgmcbzqkmftglutwqwsacagnfeeoklpvslosajhtinuge',
  ),
);

ok(
  checkPalindromeFormation('pvhmupgqeltozftlmfjjde', 'yjgpzbezspnnpszebzmhvp'),
);

/*

pvhm | upgqeltozftlmfjjde
yjgp | zbezspnnpszebzmhvp

*/

ok(
  checkPalindromeFormation(
    'aejbaalflrmkswrydwdkdwdyrwskmrlfqizjezd',
    'uvebspqckawkhbrtlqwblfwzfptanhiglaabjea',
  ),
);

/*

a = aejbaalflrmkswrydwdkdwdyrwskmrlf | qizjezd
b = uvebspqckawkhbrtlqwblfwzfptanhig | laabjea

s = aejbaalckawkhbrtlqwblfwzfptanhig | laabjea

*/
