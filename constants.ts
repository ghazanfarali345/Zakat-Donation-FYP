import { Dimensions } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Colors, Typography } from "react-native-ui-lib";

const { height, width } = Dimensions.get("screen");

export const SCREEN_HEIGHT = height;
export const SCREEN_WIDTH = width;

export const storage_url = "https://dev-ellisdocs.vercel.app/api/uploadFile";

export enum SCHEDULE_TYPE {
  DAILY = "DAILY",
  MONTHLY = "MONTHLY",
  ONETIME = "ONE_TIME",
  WEEKLY = "WEEKLY",
}

export enum ASSIGN_BY {
  FACILITY = "FACILITY",
  USER = "USER",
}

export enum PRIORITY {
  LOW = "LOW",
  STANDARD = "STANDARD",
  HIGH = "HIGH",
  EMERGENCY = "URGENT",
  ALERT = "ALERT",
}

export enum SubmissionStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  INPROGRESS = 'INPROGRESS',
  REVIEWING = 'REVIEWING'
}

export enum EmployeeType {
  SUBADMIN = "SUBADMIN",
  MANAGER = 'MANAGER',
  LIFEGUARD = "LIFEGUARD"
}

export const PriorityColor = (priority: String) => {
  switch (priority) {
    case PRIORITY.HIGH:
      return { dot: "#fff", bg: "#E80000" }
    case PRIORITY.STANDARD:
      return { dot: "#fff", bg: "#7abf9b" }
    case PRIORITY.LOW:
      return { dot: "#fff", bg: theme.color.themeblue }
    case PRIORITY.ALERT:
      return { dot: '#fff', bg: theme.color.bg }
    case PRIORITY.EMERGENCY:
      return { dot: "#fff", bg: "#cf1f42" }
    default:
      return { dot: "#fff", bg: "#fff" }
  }
}

export enum ReportType {
  Incident = "INCIDENT",
  Inventory = "INVENTORY",
  Standard = "STANDARD",
}

export const filters = [
  { label: "To Do", val: "PENDING", color: "#DF7F1B" },
  { label: "In Progress", val: "INPROGRESS", color: "#1F3C71" },
  { label: "Unassigned", val: "REVIEWING", color: "#00ACF9" },
  { label: "Completed", val: "COMPLETED", color: "#6ED08A" }
];


const fontRegularName = 'Poppins'
export const theme = {
  font: {
    light: fontRegularName + '-Light',
    lightItalic: fontRegularName + '-LightItalic',
    regular: fontRegularName + '-Regular',
    semibold: fontRegularName + '-SemiBold',
    semiboldItalic: fontRegularName + '-SemiBoldItalic',
    extraLight: fontRegularName + '-ExtraLight',
    extraLightItalic: fontRegularName + '-ExtraLightItalic',
    bold: fontRegularName + '-Bold',
    boldItalic: fontRegularName + '-BoldItalic',
    extraBold: fontRegularName + '-ExtraBold',
    extraBoldItalic: fontRegularName + '-ExtraBoldItalic',
    medium: fontRegularName + '-Medium',
    popinsSemibold: 'Poppins-SemiBold',
  },
  fontSize: {
    headingSize: 22,
    tiny: 8,
    extraVSmall: 10,
    extraSmall12: 12,
    extraSmall: 13,
    small: 14,
    medium: 15,
    regular: 16,
    large: 18,
    large20: 20,
    large24: 24,
    large26: 26,
    extraLarge: 28,
  },
  color: {
    selectionColor: "#81BDEF",
    text: "#9292A6",
    containerBackground: "#BCE1F7",
    bg: '#DF7F1B',
    themeblue: "#1C3F71",
    red: '#C92027',
    white: '#FFFFFF',
    icnBlue: '#208DEE',
    fadeBlack: '#3E4187',
    headingBlue: '#222461',
    gray: '#999B9F',
    textBlue: '#3E4187',
    bgBlue: '#006DCA',
    darkBlue: '#073395',
    statusBar: '#073395',
    borderGray: '#EFEFEF',
    borderGrayLight: 'rgba(237, 247, 255, .3)',
    textPurple: '#AC4BEB',
    bgGreen: '#02C369',
    darkGreen: '#6890B2',
    purple: 'purple',
    black: '#1D2733',
    lightBlue: '#E6F6F8',
    gradientBlue: '#12A3BD',
    appGreen: '#4CB38D',
    btnRed: '#FF6961',
    google: "#CE1717",
    facebook: "#3A589B"
  },
}


export class DesignSystem {

  // for more information - https://wix.github.io/react-native-ui-lib/foundation/style
  static async configure(): PVoid {

    Colors.loadColors(theme.color)

    // Spacings.loadSpacings({

    // })

    let fontFamilies = {}
    Object.keys(theme.font).map((s) => {
      if (!fontFamilies) fontFamilies = {}
      fontFamilies[s] = {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        fontFamily: theme.font[s],
      }
    })


    Typography.loadTypographies({
      section: { fontSize: moderateScale(26), fontWeight: '600' },
      smallest: { fontSize: moderateScale(theme.fontSize.extraVSmall), lineHeight: moderateScale(theme.fontSize.extraVSmall + 5) },
      extraVSmall: { fontSize: moderateScale(theme.fontSize.extraVSmall), lineHeight: moderateScale(theme.fontSize.extraVSmall + 5) },
      extraSmall12: { fontSize: moderateScale(theme.fontSize.extraSmall12), lineHeight: moderateScale(theme.fontSize.extraSmall12 + 5) },
      extraSmall: { fontSize: moderateScale(theme.fontSize.extraSmall), lineHeight: moderateScale(theme.fontSize.extraSmall + 5) },
      small: { fontSize: moderateScale(theme.fontSize.small), lineHeight: moderateScale(theme.fontSize.small + 5) },
      mediumSize: { fontSize: moderateScale(theme.fontSize.medium), lineHeight: moderateScale(theme.fontSize.medium + 5) },
      large: { fontSize: moderateScale(theme.fontSize.large), lineHeight: moderateScale(theme.fontSize.large + 5) },
      large20: { fontSize: moderateScale(theme.fontSize.large20), lineHeight: moderateScale(theme.fontSize.large20 + 5) },
      large24: { fontSize: moderateScale(theme.fontSize.large24), lineHeight: moderateScale(theme.fontSize.large24 + 5) },
      large26: { fontSize: moderateScale(theme.fontSize.large26), lineHeight: moderateScale(theme.fontSize.large26 + 5) },
      regularSize: { fontSize: moderateScale(theme.fontSize.regular), lineHeight: moderateScale(theme.fontSize.regular + 5) },
      extraLarge: { fontSize: moderateScale(theme.fontSize.extraLarge), lineHeight: moderateScale(theme.fontSize.extraLarge + 5) },
      heading: { fontSize: moderateScale(theme.fontSize.headingSize), lineHeight: moderateScale(theme.fontSize.headingSize + 5) },
      ...fontFamilies,
    })
  }
}