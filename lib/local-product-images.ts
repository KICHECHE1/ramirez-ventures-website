import type { StaticImageData } from "next/image";

import Acrylic from "@/app/assets/ACRYLIC.jpg.jpeg";
import Apron from "@/app/assets/apron.jpg";
import Award from "@/app/assets/AWARD.jpg.jpeg";
import BackdropBanner from "@/app/assets/back drop banner.jpg";
import Banner from "@/app/assets/banner.jpg";
import BookmarkCards from "@/app/assets/bookmark cards.jpg";
import Box from "@/app/assets/Box_.jpg.jpeg";
import BrandIdentity from "@/app/assets/brand identity.jpg";
import BrandedItems from "@/app/assets/branded items.jpg.jpeg";
import BrandedTshirt from "@/app/assets/branded tshirt.jpeg";
import Brochure from "@/app/assets/brochure.jpg";
import BumperStickers from "@/app/assets/Bumper Stickers.jpg";
import BusinessCard from "@/app/assets/Business Card.jpg";
import BusinessCardOfficial from "@/app/assets/Business Card - official.jpg";
import BusinessCardSpot from "@/app/assets/Business Card 2.1.jpg";
import ButtonBadge from "@/app/assets/Button_Mockup_3.jpg";
import Calendar from "@/app/assets/CALENDERS.jpg.jpeg";
import Canvas from "@/app/assets/Canvas_.jpg.jpeg";
import Cap from "@/app/assets/cap.jpg.jpeg";
import CeramicMug from "@/app/assets/CERAMIC MUG.jpg.jpeg";
import ClearStickers from "@/app/assets/Clear Transparent Stickers.jpg";
import ClubJersey from "@/app/assets/club jersay.jpg";
import CompanyProfile from "@/app/assets/company profile.jpg";
import CustomCutStickers from "@/app/assets/Custom Cut Stickers.jpg";
import CustomStickerPrinting from "@/app/assets/Custom Sticker Printing.jpg";
import DieCutStickers from "@/app/assets/Die-Cut Stickers.jpg";
import DirectionalSign from "@/app/assets/DIRECTAL.jpg.jpeg";
import DocumentPrinting from "@/app/assets/document printing.jpg";
import DoorSign from "@/app/assets/DOOR SIGN.jpg.jpeg";
import DtfSheet from "@/app/assets/DTF SHEET.jpg.jpeg";
import ElectionPoster from "@/app/assets/election poster.jpg";
import EnamelCup from "@/app/assets/Enamel_Cups.jpg.jpeg";
import EventMagazine from "@/app/assets/event magazine.jpg";
import ExhibitionStand from "@/app/assets/ExhibitionStand.jpg";
import Flyer from "@/app/assets/Flyer.jpg";
import Flyers from "@/app/assets/flyers.jpeg";
import FuneralProgram from "@/app/assets/funeral program.jpg";
import GiftBox from "@/app/assets/GIF BOX.jpg.jpeg";
import GiftVoucher from "@/app/assets/gift voucher.jpg";
import Hoodie from "@/app/assets/hoodie.jpg";
import HtvSheet from "@/app/assets/HTV SHEET.jpg.jpeg";
import Illuminated from "@/app/assets/ILLUMINATED.jpg.jpeg";
import Inks from "@/app/assets/INKS.jpg.jpeg";
import KeyChain from "@/app/assets/KEY CHAIN.jpg.jpeg";
import KitengeNotebook from "@/app/assets/kitenge notebooks.jpg";
import LargeFormatPhoto from "@/app/assets/Large Format photoprint.jpg";
import Letterhead from "@/app/assets/LETTEREHESD.jpg.jpeg";
import LongSleeve from "@/app/assets/LONG SLEEVE.jpg.jpeg";
import LogoDesign from "@/app/assets/logos.jpg";
import MountedPhoto from "@/app/assets/MOUNTED PHOTO.jpg.jpeg";
import Mug from "@/app/assets/Mug.jpeg";
import MugSet from "@/app/assets/Mug_SET.jpeg";
import NameTags from "@/app/assets/name tags.jpg";
import Notebook from "@/app/assets/Notebook.jpg.jpeg";
import PaperBag from "@/app/assets/PaperBag.jpg.jpeg";
import PanoramicPrints from "@/app/assets/PANORAMIC PRINTS.jpg.jpeg";
import Pen from "@/app/assets/Pen.jpg.jpeg";
import Pens from "@/app/assets/PENS.jpg.jpeg";
import PhotoBook from "@/app/assets/PHOTOBOOK.jpg.jpeg";
import PhotoPrinting from "@/app/assets/photo printing.jpg";
import PhoneStickers from "@/app/assets/Phone Stickers.jpg";
import PoloShirt from "@/app/assets/Polo_Shirt.jpg.jpeg";
import Poster from "@/app/assets/Poster.jpg";
import Postcards from "@/app/assets/postcards.jpg";
import PreburnScreen from "@/app/assets/PREBURN SCREEN.jpg.jpeg";
import ProductLabels from "@/app/assets/Product Labels.jpg";
import ReceiptBook from "@/app/assets/RECEIP BOOK.jpg.jpeg";
import Reflector from "@/app/assets/reflector.jpg";
import RollStickers from "@/app/assets/Roll Stickers & Labels.jpg";
import RollupBanner from "@/app/assets/Roll-Up Stand Banner.jpg";
import SchoolMagazine from "@/app/assets/school magz.jpg";
import Screen from "@/app/assets/SCREEN.jpg.jpeg";
import ScreenPrinting from "@/app/assets/SCREEN PRINTING.jpg.jpeg";
import SecurityStickers from "@/app/assets/Security and Warning Stickers.jpg";
import ShippingBag from "@/app/assets/Shipping_Bag_Mockup_1.jpg";
import Signages from "@/app/assets/Signages.jpg";
import SocialGraphics from "@/app/assets/social grahixs.jpg";
import SportBottle from "@/app/assets/Sport_Bottle_.jpg.jpeg";
import StandardPhoto from "@/app/assets/STANDARD PHOTO PRINTING.jpg.jpeg";
import StartKit from "@/app/assets/START KIT 2.jpg.jpeg";
import Sticker from "@/app/assets/Sticker.jpg";
import StreetBillboard from "@/app/assets/Street-Billboard-Mockup.jpg";
import Sublimation from "@/app/assets/SUBMLIMATION.jpg.jpeg";
import TableCloth from "@/app/assets/Tablecloth.jpg";
import TableRollup from "@/app/assets/table roll up _Banner_Mockup_2.jpg";
import ToteBag from "@/app/assets/Tote_Bag.jpg.jpeg";
import TravelMug from "@/app/assets/Travel_Mug.jpg.jpeg";
import TriFoldBrochure from "@/app/assets/tri fold brochure.jpg";
import Tshirt from "@/app/assets/T-Shirt.jpg";
import Tumbler from "@/app/assets/Tumbler.jpg.jpeg";
import Umbrella from "@/app/assets/UMBRELLA.jpg.jpeg";
import VehicleBranding from "@/app/assets/VEHICLE BRANDIIN.jpg.jpeg";
import WallGraphics from "@/app/assets/WALL.jpg.jpeg";
import WaterBottle from "@/app/assets/water bottle.jpeg";
import WheelCover from "@/app/assets/wheelcovers.jpg";
import WindowGraphics from "@/app/assets/WINDOWS GRAPH.jpg.jpeg";

type Asset = StaticImageData;

const imageMap: Record<string, Asset> = {
  "acp signage": Signages,
  "acrylic signage": Acrylic,
  "backdrop banner": BackdropBanner,
  "backdrop design": BackdropBanner,
  "banner": Banner,
  "booklet magazine": EventMagazine,
  "booklet magazine printing": EventMagazine,
  "booklet printing": CompanyProfile,
  bookmarks: BookmarkCards,
  "bookmarks printing": BookmarkCards,
  "bumper stickers": BumperStickers,
  "branded apparel printing kenya": BrandedTshirt,
  "branded aprons": Apron,
  "branded campaign aprons": Apron,
  "branded caps": Cap,
  "branded envelopes": PaperBag,
  "branded hoodies": Hoodie,
  "branded jersey": ClubJersey,
  "branded jerseys": ClubJersey,
  "branded jerseys for clubs": ClubJersey,
  "branded keychains": KeyChain,
  "branded letterheads": Letterhead,
  "branded notebooks": Notebook,
  "branded notepads": Notebook,
  "branded pen": Pen,
  "branded pens": Pens,
  "branded stationery kenya": Letterhead,
  "branded t-shirt": BrandedTshirt,
  "branded t-shirts": BrandedTshirt,
  "branded tote bags": ToteBag,
  "branded umbrellas": Umbrella,
  "branded usb drives": BrandedItems,
  "branded water bottles": SportBottle,
  "brochure design": Brochure,
  "brochure printing": TriFoldBrochure,
  "brochures printing": Brochure,
  "business card design": BusinessCardOfficial,
  "business cards": BusinessCardOfficial,
  "business cards printing": BusinessCardOfficial,
  "business cards printing kenya": BusinessCard,
  "button badges": ButtonBadge,
  "button badges printing": ButtonBadge,
  "calendar printing": Calendar,
  "campaign posters": ElectionPoster,
  "campaign posters printing": ElectionPoster,
  "canvas prints": Canvas,
  "ceramic mug": CeramicMug,
  "certificates awards": Award,
  "clear uv stickers": ClearStickers,
  "compliment slips": BusinessCardOfficial,
  "custom boxes": Box,
  "custom cut stickers": CustomCutStickers,
  "custom sticker printing": CustomStickerPrinting,
  "die-cut stickers": DieCutStickers,
  "document printing": DocumentPrinting,
  "door office signs": DoorSign,
  "dtf transfers": DtfSheet,
  "embroidered polo": PoloShirt,
  "enamel mug": EnamelCup,
  "exhibition backdrop design": ExhibitionStand,
  "exposure artwork": Screen,
  flyer: Flyer,
  "flyer design": Flyers,
  "flyers": Flyers,
  "flyers printing": Flyers,
  "funeral programs": FuneralProgram,
  "funeral programs printing": FuneralProgram,
  "gift boxes": GiftBox,
  "gift voucher printing": GiftVoucher,
  "gift vouchers": GiftVoucher,
  "graphic design services": BrandIdentity,
  "heat transfer vinyls": HtvSheet,
  "illuminated led signage": Illuminated,
  "invoice receipt books": ReceiptBook,
  "kitenge notebooks": KitengeNotebook,
  "large format photos": LargeFormatPhoto,
  "logo design": LogoDesign,
  "long sleeve shirt": LongSleeve,
  "media wall banner": BackdropBanner,
  "mounted prints": MountedPhoto,
  mug: Mug,
  "mug gift set": MugSet,
  nametags: NameTags,
  "nametags printing": NameTags,
  "passport photos": PhotoPrinting,
  "paper bags": PaperBag,
  "panoramic prints": PanoramicPrints,
  "phone stickers": PhoneStickers,
  "photo books": PhotoBook,
  "photo printing": PhotoPrinting,
  "pillow boxes": GiftBox,
  postcards: Postcards,
  "postcards printing": Postcards,
  "pre-burn screens": PreburnScreen,
  "presentation folders": CompanyProfile,
  "printing inks": Inks,
  "product labels": ProductLabels,
  "poly bags": ShippingBag,
  "promotional items kenya": BrandedItems,
  "pvc wheel cover": WheelCover,
  "reflector jacket": Reflector,
  "reflector jackets": Reflector,
  "reflector jackets printing": Reflector,
  "roll up banner": RollupBanner,
  "roll stickers labels": RollStickers,
  "round neck t-shirt": Tshirt,
  "screen print t-shirt": ScreenPrinting,
  "screen printing": ScreenPrinting,
  "screen printing supplies and transfers": ScreenPrinting,
  "screen reclamation": Screen,
  "screen transfers": DtfSheet,
  "school magazine": SchoolMagazine,
  "security warning stickers": SecurityStickers,
  "selfie frames": Poster,
  "s-banner": StreetBillboard,
  "signage kenya": Signages,
  "social media graphics": SocialGraphics,
  "sports jerseys": ClubJersey,
  "spot uv business cards": BusinessCardSpot,
  "spot uv cards": BusinessCardSpot,
  "standard business cards": BusinessCardOfficial,
  "standard photo prints": StandardPhoto,
  "start up kit": StartKit,
  "sublimation t-shirt": Sublimation,
  "table cloth": TableCloth,
  "table rollup": TableRollup,
  "t-shirt printing kenya": Tshirt,
  "travel mug": TravelMug,
  tumbler: Tumbler,
  "umbrella printing": Umbrella,
  "vehicle branding": VehicleBranding,
  "vinyl banner": Banner,
  "vinyl stickers": Sticker,
  "v-neck t-shirt": Tshirt,
  "wall graphics": WallGraphics,
  "water bottle": WaterBottle,
  "wayfinding signs": DirectionalSign,
  "window graphics": WindowGraphics,
};

export function localProductImage(label: string) {
  const key = label.replace(/\+/g, " ").replace(/&/g, " ").replace(/\s+/g, " ").trim().toLowerCase();
  return (imageMap[key] ?? imageMap[key.replace(/ and /g, " ")] ?? Sticker).src;
}
