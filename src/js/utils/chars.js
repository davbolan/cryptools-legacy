const DIGIT = '0123456789';
const SPACE = ' ';

const SQUARE_BRACKET = '[]';
const CURLY_BRACKET = '{}';
const PARENTHESIS = '()';
const SUPPORT = SQUARE_BRACKET + CURLY_BRACKET + PARENTHESIS;

const MATH = '+-÷*/=%<>' + '×±¬∞' + '¼½¾' + '¹²³' + '√∛∜' + 'ƒ∫∬∭⨌';

const CURRENCY = '€$¥£' + '¢¤₤' + '֏؋߾߿৲৳৻૱௹฿៛₡₢₣₥₦₧₨₩₪₫₭₮₯₰₱₲₳₴₵₶₷₸₹₺₻₼₽₾₿꠸﷼';

const BASIC_MARKS = '!#&.,:;¿?¡!|@_–—~ªº¨' + '·…‚„¦';

const QUOTE = '\'"`´' + '«»“ˮ‘ʼ′‵″‶‴‷‸‹›’”';

const OTHER_COMMONS_CHARS = '™©®';

const ARROWS =
  '←↑→↓↔↕↖↗↘↙↚↛↜↝↞↟↠↡↢↣↤↥↦↧↨↩↪↫↬↭↮↯↰↱↲↳↴↵↶↷↸↹↺↻↼↽↾↿⇀⇁⇂⇃⇄⇅⇆⇇⇈⇉⇊⇋⇌⇍⇎⇏⇐⇑⇒⇓⇔⇕⇖⇗⇘⇙⇚⇛⇜⇝⇞⇟⇠⇡⇢⇣⇤⇥⇦⇧⇨⇩⇪';

const LOWERCASE_LETTERS = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCASE_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LETTERS = LOWERCASE_LETTERS + UPPERCASE_LETTERS;

const SPECIAL_SPANISH_CHARS = 'áÁéÉíÍóÓúÚïÏüÜñÑçÇªº¿?¡!₧.,-—…()[]';
const SPANISH_CHARS = DIGIT + LETTERS + SPACE + SPECIAL_SPANISH_CHARS;

const LOWERCASE_TURNED = 'ɐǝᴉ' + 'ᵷɥʞꞁɯɹʇʌʍʎ' + 'ɒ';
const UPPERCASE_TURNED = 'Ɐ' + 'ƜɅⱰꝾꞀꞍꞰꞱ';
const TURNED = LOWERCASE_TURNED + UPPERCASE_TURNED;

const LOWERCASE_GREEK = 'αειο' + 'βγδζηθκλμνξπρστυφχψω' + 'ς';
const UPPERCASE_GREEK = 'ΑΕΙΟ' + 'ΒΓΔΖΗΘΚΛΜΝΞΠΡΣΤΥΦΧΨΩ';
const GREEK = LOWERCASE_GREEK + UPPERCASE_GREEK;

const LOWERCASE_RUSSIAN = 'аязеыиоёую' + 'бвгджйклмнпрстфхцчшщъьэ';
const UPPERCASE_RUSSIAN = 'АЯЗЕЫИОЁУЮ' + 'БВГДЖЙКЛМНПРСТФХЦЧШЩЪЬЭ';
const RUSSIAN = LOWERCASE_RUSSIAN + UPPERCASE_RUSSIAN;

const LOWERCASE_GRAVE = 'àèìòù' + 'ǹẁỳ';
const UPPERCASE_GRAVE = 'ÀÈÌÒÙ' + 'ǸẀỲ'; //+'Ѐ' // E cilirica;
const GRAVE = LOWERCASE_GRAVE + UPPERCASE_GRAVE;

const LOWERCASE_DOUBLE_GRAVE = 'ȁȅȉȍȕ' + 'ȑ';
const UPPERCASE_DOUBLE_GRAVE = 'ȀȄȈȌȔ' + 'Ȑ';
const DOUBLE_GRAVE = LOWERCASE_DOUBLE_GRAVE + UPPERCASE_DOUBLE_GRAVE;

const LOWERCASE_ACUTE = 'áéíóú' + 'ćǵḱĺḿńṕŕśẃýź'; // + 'ǿǽ';
const UPPERCASE_ACUTE = 'ÁÉÍÓÚ' + 'ĆǴḰĹḾŃṔŔŚẂÝŹ'; // + 'ǾǼ';
const ACUTE = LOWERCASE_ACUTE + UPPERCASE_ACUTE;

const LOWERCASE_DOUBLE_ACUTE = 'őű';
const UPPERCASE_DOUBLE_ACUTE = 'ŐŰ';
const DOUBLE_ACUTE = LOWERCASE_DOUBLE_ACUTE + UPPERCASE_DOUBLE_ACUTE;

const LOWERCASE_CARON = 'ǎěǐǒǔ' + 'čďǧȟǰǩľňřšťž';
const UPPERCASE_CARON = 'ǍĚǏǑǓ' + 'ČĎǦȞǨĽŇŘŠŤŽ';
const CARON = LOWERCASE_CARON + UPPERCASE_CARON;

const LOWERCASE_CIRCUMFLEX = 'âêîôû' + 'ĉĝĥĵŝŵŷ';
const UPPERCASE_CIRCUMFLEX = 'ÂÊÎÔÛ' + 'ĈĜĤĴŜŴŶ';
const CIRCUMFLEX = LOWERCASE_CIRCUMFLEX + UPPERCASE_CIRCUMFLEX;

const LOWERCASE_TILDE = 'ãõĩũ' + 'ñ';
const UPPERCASE_TILDE = 'ÃÕĨŨ' + 'Ñ';
const TILDE = LOWERCASE_TILDE + UPPERCASE_TILDE;

const LOWERCASE_DIAERESIS = 'äëïöü' + 'ÿ';
const UPPERCASE_DIAERESIS = 'ÄËÏÖÜ' + 'Ÿ';
const DIAERESIS = LOWERCASE_DIAERESIS + UPPERCASE_DIAERESIS;

const LOWERCASE_BREVE = 'ăĕğĭŏŭ';
const UPPERCASE_BREVE = 'ĂĔĞĬŎŬ';
const BREVE = LOWERCASE_BREVE + UPPERCASE_BREVE;

const LOWERCASE_INVERTED_BREVE = 'ȃȇȋȏȓȗ';
const UPPERCASE_INVERTED_BREVE = 'ȂȆȊȎȒȖ';
const INVERTED_BREVE = LOWERCASE_INVERTED_BREVE + UPPERCASE_INVERTED_BREVE;

const LOWERCASE_MACRON = 'āēīōū';
const UPPERCASE_MACRON = 'ĀĒĪŌŪ';
const MACRON = LOWERCASE_MACRON + UPPERCASE_MACRON;

const LOWERCASE_RING = 'åů';
const UPPERCASE_RING = 'ÅŮ';
const RING = LOWERCASE_RING + UPPERCASE_RING;

const LOWERCASE_OGONEK = 'ąęįǫų';
const UPPERCASE_OGONEK = 'ĄĘĮǪŲ';
const OGONEK = LOWERCASE_OGONEK + UPPERCASE_OGONEK;

const LOWERCASE_CEDILLA = 'Ȩ' + 'ÇĢĶĻŅŖŞŢ';
const UPPERCASE_CEDILLA = 'ȩ' + 'çģķļņŗşţ';
const CEDILLA = LOWERCASE_CEDILLA + UPPERCASE_CEDILLA;

const LOWERCASE_DOT_ABOVE = 'ȧėȯ' + 'ċġż';
const UPPERCASE_DOT_ABOVE = 'ȦĖİȮ' + 'ĊĠŻ';
const DOT_ABOVE = LOWERCASE_DOT_ABOVE + UPPERCASE_DOT_ABOVE;

const A_VARIANTS = 'aAɐⱯαΑаАàÀȁȀáÁǎǍâÂãÃäÄăĂȃȂāĀåÅąĄȦȧǺǻǞǟǠǡΆ';
const E_VARIANTS = 'eEǝεΕзЗèÈȅȄéÉěĚêÊëËĕĔȇȆēĒęĘȩȨėĖΈ';
const I_VARIANTS = 'IiᴉιΙìÌȉȈíÍǐǏîÎĩĨïÏĭĬȋȊīĪįĮİ';
// const O_VARIANTS = 'Coming soon...';
// const U_VARIANTS = 'Coming soon...';
// const VOWEL_VARIANTS = A_VARIANTS + E_VARIANTS + O_VARIANTS + O_VARIANTS + U_VARIANTS;

const MERGEDLIKE_LETTERS =
  'ÆæǢǼǽæǣᴂ' + 'ǄǅǆǱǲǳʣʥ' + 'Ǉǈǉ' + 'Œɶœᴔꭁꭂ' + 'ǊǋǌǶʤʦʧʨʩʪʫʬɮ;';

const LETTER_WITH_ACCENTS_COMBINATIONS =
  'ǺǻǞǟǠǡΆ' + 'Έ' + 'ЇΪ' + 'ȪȫȬȭȰȱόǬǭƠơ' + 'ǕǖǗǘǙǚǛǜƯư' + 'ΫȲȳ' + 'Ȥȥʐ';

const DIAGONAL_CROSSED_OUT_LETTER = 'ȺɆɇȻȼȾŁłØǾǿ';

const EZH_LETTER = 'ʒʓǮǯƷȜȝƺ';

const DEVICE_CONTROL_ASCII_CHARS = '☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼';

const PRINTABLE_ASCII_CHARS =
  ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';

const ASCII_CHARS = DEVICE_CONTROL_ASCII_CHARS + PRINTABLE_ASCII_CHARS;

const MISC =
  '^˂˃˄˅†‡ˆ‰•˜§­¯°µ¶¸ÐÞßðøþĐđĦħıĲĳĸĿŀŉŊŋŦŧſƀƁƂƃƄƅƆƇƈƉƊƋƌƎƏƐƑƓƔƕƖƗƘƙƚƛƝƞƟƢƣƤƥƦƧƨƩƪƫƬƭƮƱƲƳƴƵƶƸƹ' +
  'ƻƼƽƾƿǀǁǂǃǤǥǷȘșȚțȠȡȢȣɄȴȵȶȷȸȹȽȿɀɁɂɃɈɉɊɋɌɍɎɏɑɓɔɕɖɗɘəɚɛɜɝɞɟɠɡɢɣɤɦɧɨɩɪɫɬɭɰɱɲɳɴɵɷɸɺɻɼɽɾɿʀʁʂʃʄʅʆ' +
  'ʈʉʊʋʏʑʔʕʖʗʘʙʚʛʜʝʟʠʡʢʭʮʯʰʱʲʳʴʵʶʷʸʹʺʻʽʾʿˀˁˆˇˈˉˊˋˌˍˎˏːˑ˒˓˔˕˖˗˘˙˚˛˜˝˞˟ˠˡˢˣˤ˥˦˧˨˩˪˫ˬ˭˯˰˱˲˳˴˵˶˷˸˹˺˻' +
  '˼˽˾˿Ͱͱʹ͵Ͷͷͺͻͼͽ;΄΅·ΉΊΌΎΏΐάέήίΰϊϋύώϏϐϑϕϖϗϘϙϚϛϝϞϟϠϡϢϣϤϥϦϧϨϩϪϫϬϭϮϯϰϱϲϳϴϵ϶ϷϸϻϼϽϾϿЂЃЄЅІͲͳϜϹϺϒϓϔͿ';

const BASIC_DICT = String.prototype.concat(
  ...new Set([ASCII_CHARS, SPECIAL_SPANISH_CHARS, '€'].join(''))
);

const EXTENDED_DICT = String.prototype.concat(
  ...new Set(
    [
      BASIC_DICT,
      GRAVE,
      DOUBLE_GRAVE,
      ACUTE,
      DOUBLE_ACUTE,
      CARON,
      CIRCUMFLEX,
      TILDE,
      DIAERESIS,
      BREVE,
      INVERTED_BREVE,
      MACRON,
      RING,
      OGONEK,
      CEDILLA,
      DOT_ABOVE,
    ].join('')
  )
);

const DEFAULT_DICT = BASIC_DICT;

const ALL_CHARS = String.prototype.concat(
  ...new Set(
    [
      MATH,
      CURRENCY,
      BASIC_MARKS,
      QUOTE,
      OTHER_COMMONS_CHARS,
      ARROWS,
      TURNED,
      GREEK,
      RUSSIAN,
      EXTENDED_DICT,
      MERGEDLIKE_LETTERS,
      LETTER_WITH_ACCENTS_COMBINATIONS,
      DIAGONAL_CROSSED_OUT_LETTER,
      EZH_LETTER,
      MISC,
      ASCII_CHARS,
      SPANISH_CHARS,
    ].join('')
  )
);
