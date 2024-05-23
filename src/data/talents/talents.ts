import { Talent } from "../types";
import { Civia } from "./holo-cn-1-civia";
import { SpadeEcho } from "./holo-cn-1-echo";
import { Yogiri } from "./holo-cn-1-yogiri";
import { Rosalyn } from "./holo-cn-2-artia";
import { Doris } from "./holo-cn-2-doris";
import { Artia } from "./holo-cn-2-rosalyn";
import { HiodoshiAo } from "./holo-dev_is-1-ao";
import { TodorokiHajime } from "./holo-dev_is-1-hajime";
import { OtonoseKanade } from "./holo-dev_is-1-kanade";
import { JuufuuteiRaden } from "./holo-dev_is-1-raden";
import { IchijouRirika } from "./holo-dev_is-1-ririka";
import { WatsonAmelia } from "./holo-en-1-ame";
import { MoriCalliope } from "./holo-en-1-calli";
import { GawrGura } from "./holo-en-1-gura";
import { NinomaeInanis } from "./holo-en-1-ina";
import { TakanashiKiara } from "./holo-en-1-kiara";
import { HakosBaelz } from "./holo-en-2-bae";
import { CeresFauna } from "./holo-en-2-fauna";
import { OuroKronii } from "./holo-en-2-kronii";
import { NanashiMumei } from "./holo-en-2-mumei";
import { TsukumoSana } from "./holo-en-2-sana";
import { KosekiBijou } from "./holo-en-3-bijou";
import { FuwawaAbyssgard } from "./holo-en-3-fuwawa";
import { MococoAbyssgard } from "./holo-en-3-mococo";
import { NerissaRavencroft } from "./holo-en-3-nerissa";
import { ShioriNovella } from "./holo-en-3-shiori";
import { Irys } from "./holo-en-hope-irys";
import { AiraniIofifteen } from "./holo-id-1-iofi";
import { MoonaHoshinova } from "./holo-id-1-moona";
import { AyundaRisu } from "./holo-id-1-risu";
import { AnyaMelfissa } from "./holo-id-2-anya";
import { KureijiOllie } from "./holo-id-2-ollie";
import { PavoliaReine } from "./holo-id-2-reine";
import { KaelaKovalskia } from "./holo-id-3-kaela";
import { KoboKanaeru } from "./holo-id-3-kobo";
import { VestiaZeta } from "./holo-id-3-zeta";
import { Azki } from "./holo-jp-0-azki";
import { SakuraMiko } from "./holo-jp-0-miko";
import { Roboco } from "./holo-jp-0-roboco";
import { TokinoSora } from "./holo-jp-0-sora";
import { HoshimachiSuisei } from "./holo-jp-0-suisei";
import { AkiRosenthal } from "./holo-jp-1-aki";
import { HitomiChris } from "./holo-jp-1-chris";
import { ShirakamiFubuki } from "./holo-jp-1-fubuki";
import { AkaiHaato } from "./holo-jp-1-haato";
import { NatsuiroMatsuri } from "./holo-jp-1-matsuri";
import { YozoraMel } from "./holo-jp-1-mel";
import { MinatoAqua } from "./holo-jp-2-aqua";
import { NakiriAyame } from "./holo-jp-2-ayame";
import { YuzukiChoco } from "./holo-jp-2-choco";
import { MurasakiShion } from "./holo-jp-2-shion";
import { OozoraSubaru } from "./holo-jp-2-subaru";
import { ShiranuiFlare } from "./holo-jp-3-flare";
import { HoushouMarine } from "./holo-jp-3-marine";
import { ShiroganeNoel } from "./holo-jp-3-noel";
import { UsadaPekora } from "./holo-jp-3-pekora";
import { UruhaRushia } from "./holo-jp-3-rushia";
import { KiryuCoco } from "./holo-jp-4-coco";
import { AmaneKanata } from "./holo-jp-4-kanata";
import { HimemoriLuna } from "./holo-jp-4-luna";
import { TokoyamiTowa } from "./holo-jp-4-towa";
import { TsunomakiWatame } from "./holo-jp-4-watame";
import { ManoAloe } from "./holo-jp-5-aloe";
import { ShishiroBotan } from "./holo-jp-5-botan";
import { YukihanaLamy } from "./holo-jp-5-lamy";
import { MomosuzuNene } from "./holo-jp-5-nene";
import { OmaruPolka } from "./holo-jp-5-polka";
import { SakamataChloe } from "./holo-jp-6-chloe";
import { KazamaIroha } from "./holo-jp-6-iroha";
import { HakuiKoyori } from "./holo-jp-6-koyori";
import { LaplusDarknesss } from "./holo-jp-6-laplus";
import { TakaneLui } from "./holo-jp-6-lui";
import { InugamiKorone } from "./holo-jp-gamers-korone";
import { OokamiMio } from "./holo-jp-gamers-mio";
import { NekomataOkayu } from "./holo-jp-gamers-okayu";
import { AxelSyrios } from "./holostars-en-1-axel";
import { GavisBettel } from "./holostars-en-1-bettel";
import { MachinaXFlayon } from "./holostars-en-1-flayon";
import { BanzoinHakka } from "./holostars-en-1-hakka";
import { MagniDezmond } from "./holostars-en-1-magni";
import { RegisAltare } from "./holostars-en-1-regis";
import { JosuijiShinri } from "./holostars-en-1-shinri";
import { NoirVesper } from "./holostars-en-1-vesper";
import { Goldbullet } from "./holostars-en-2-goldbullet";
import { JurardTRexford } from "./holostars-en-2-jurard";
import { Octavio } from "./holostars-en-2-octavio";
import { CrimzonRuze } from "./holostars-en-2-ruze";
import { Arurandeisu } from "./holostars-jp-1-aruran";
import { KanadeIzuru } from "./holostars-jp-1-izuru";
import { KagamiKira } from "./holostars-jp-1-kira";
import { HanasakiMiyabi } from "./holostars-jp-1-miyabi";
import { Rikka } from "./holostars-jp-1-rikka";
import { YakushijiSuzaku } from "./holostars-jp-1-suzaki";
import { AstelLeda } from "./holostars-jp-2-astel";
import { YukokuRoberu } from "./holostars-jp-2-roberu";
import { KishidoTemma } from "./holostars-jp-2-temma";
import { TsukishitaKaoru } from "./holostars-jp-3-kaoru";
import { AragamiOga } from "./holostars-jp-3-oga";
import { KageyamaShien } from "./holostars-jp-3-shien";
import { YatogamiFuma } from "./holostars-jp-4-fuma";
import { HizakiGamma } from "./holostars-jp-4-gamma";
import { MinaseRio } from "./holostars-jp-4-rio";
import { UtsugiUyu } from "./holostars-jp-4-uyu";

export const Talents: Talent[] = [
  // CN 1
  Civia,
  SpadeEcho,
  Yogiri,
  // CN 2
  Artia,
  Doris,
  Rosalyn,
  // Dev_is 1
  HiodoshiAo,
  TodorokiHajime,
  OtonoseKanade,
  JuufuuteiRaden,
  IchijouRirika,
  // EN 1
  WatsonAmelia,
  MoriCalliope,
  GawrGura,
  NinomaeInanis,
  TakanashiKiara,
  // EN 2
  HakosBaelz,
  CeresFauna,
  OuroKronii,
  NanashiMumei,
  TsukumoSana,
  Irys,
  // EN 3
  KosekiBijou,
  FuwawaAbyssgard,
  MococoAbyssgard,
  NerissaRavencroft,
  ShioriNovella,
  // ID 1
  AiraniIofifteen,
  MoonaHoshinova,
  AyundaRisu,
  // ID 2
  AnyaMelfissa,
  KureijiOllie,
  PavoliaReine,
  // ID 3
  KaelaKovalskia,
  VestiaZeta,
  KoboKanaeru,
  // JP 0
  Azki,
  SakuraMiko,
  Roboco,
  TokinoSora,
  HoshimachiSuisei,
  // JP 1
  AkiRosenthal,
  HitomiChris,
  ShirakamiFubuki,
  AkaiHaato,
  NatsuiroMatsuri,
  YozoraMel,
  // JP 2
  MinatoAqua,
  NakiriAyame,
  YuzukiChoco,
  MurasakiShion,
  OozoraSubaru,
  // JP 3
  ShiranuiFlare,
  HoushouMarine,
  ShiroganeNoel,
  UsadaPekora,
  UruhaRushia,
  // JP 4
  KiryuCoco,
  AmaneKanata,
  HimemoriLuna,
  TokoyamiTowa,
  TsunomakiWatame,
  // JP 5
  ManoAloe,
  ShishiroBotan,
  YukihanaLamy,
  MomosuzuNene,
  OmaruPolka,
  // JP 6
  SakamataChloe,
  KazamaIroha,
  HakuiKoyori,
  LaplusDarknesss,
  TakaneLui,
  // Gamers
  InugamiKorone,
  OokamiMio,
  NekomataOkayu,
  // Star EN 1
  AxelSyrios,
  GavisBettel,
  MachinaXFlayon,
  BanzoinHakka,
  MagniDezmond,
  RegisAltare,
  JosuijiShinri,
  NoirVesper,
  // Star EN 2
  Goldbullet,
  JurardTRexford,
  Octavio,
  CrimzonRuze,
  // Star JP 1
  Arurandeisu,
  KanadeIzuru,
  KagamiKira,
  HanasakiMiyabi,
  Rikka,
  YakushijiSuzaku,
  // Star JP 2
  AstelLeda,
  YukokuRoberu,
  KishidoTemma,
  // Star JP 3
  TsukishitaKaoru,
  AragamiOga,
  KageyamaShien,
  // Star JP 4
  YatogamiFuma,
  HizakiGamma,
  MinaseRio,
  UtsugiUyu,
];
