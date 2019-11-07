/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreatePodInput = {
  id?: string | null
  name: string
  description?: string | null
  startTime: string
  endTime: string
  location: LocationInput
  createdAt?: string | null
  updatedAt?: string | null
  podOwnerId: string
}

export type LocationInput = {
  address?: AddressInput | null
  geopoint?: GeopointInput | null
  type?: LocationType | null
}

export type AddressInput = {
  street?: string | null
  city?: string | null
  state?: string | null
  zip?: string | null
  country?: Country | null
}

export enum Country {
  AFG = 'AFG',
  ALA = 'ALA',
  ALB = 'ALB',
  DZA = 'DZA',
  ASM = 'ASM',
  AND = 'AND',
  AGO = 'AGO',
  AIA = 'AIA',
  ATA = 'ATA',
  ATG = 'ATG',
  ARG = 'ARG',
  ARM = 'ARM',
  ABW = 'ABW',
  AUS = 'AUS',
  AUT = 'AUT',
  AZE = 'AZE',
  BHS = 'BHS',
  BHR = 'BHR',
  BGD = 'BGD',
  BRB = 'BRB',
  BLR = 'BLR',
  BEL = 'BEL',
  BLZ = 'BLZ',
  BEN = 'BEN',
  BMU = 'BMU',
  BTN = 'BTN',
  BOL = 'BOL',
  BES = 'BES',
  BIH = 'BIH',
  BWA = 'BWA',
  BVT = 'BVT',
  BRA = 'BRA',
  IOT = 'IOT',
  BRN = 'BRN',
  BGR = 'BGR',
  BFA = 'BFA',
  BDI = 'BDI',
  CPV = 'CPV',
  KHM = 'KHM',
  CMR = 'CMR',
  CAN = 'CAN',
  CYM = 'CYM',
  CAF = 'CAF',
  TCD = 'TCD',
  CHL = 'CHL',
  CHN = 'CHN',
  CXR = 'CXR',
  CCK = 'CCK',
  COL = 'COL',
  COM = 'COM',
  COG = 'COG',
  COD = 'COD',
  COK = 'COK',
  CRI = 'CRI',
  CIV = 'CIV',
  HRV = 'HRV',
  CUB = 'CUB',
  CUW = 'CUW',
  CYP = 'CYP',
  CZE = 'CZE',
  DNK = 'DNK',
  DJI = 'DJI',
  DMA = 'DMA',
  DOM = 'DOM',
  ECU = 'ECU',
  EGY = 'EGY',
  SLV = 'SLV',
  GNQ = 'GNQ',
  ERI = 'ERI',
  EST = 'EST',
  SWZ = 'SWZ',
  ETH = 'ETH',
  FLK = 'FLK',
  FRO = 'FRO',
  FJI = 'FJI',
  FIN = 'FIN',
  FRA = 'FRA',
  GUF = 'GUF',
  PYF = 'PYF',
  ATF = 'ATF',
  GAB = 'GAB',
  GMB = 'GMB',
  GEO = 'GEO',
  DEU = 'DEU',
  GHA = 'GHA',
  GIB = 'GIB',
  GRC = 'GRC',
  GRL = 'GRL',
  GRD = 'GRD',
  GLP = 'GLP',
  GUM = 'GUM',
  GTM = 'GTM',
  GGY = 'GGY',
  GIN = 'GIN',
  GNB = 'GNB',
  GUY = 'GUY',
  HTI = 'HTI',
  HMD = 'HMD',
  VAT = 'VAT',
  HND = 'HND',
  HKG = 'HKG',
  HUN = 'HUN',
  ISL = 'ISL',
  IND = 'IND',
  IDN = 'IDN',
  IRN = 'IRN',
  IRQ = 'IRQ',
  IRL = 'IRL',
  IMN = 'IMN',
  ISR = 'ISR',
  ITA = 'ITA',
  JAM = 'JAM',
  JPN = 'JPN',
  JEY = 'JEY',
  JOR = 'JOR',
  KAZ = 'KAZ',
  KEN = 'KEN',
  KIR = 'KIR',
  PRK = 'PRK',
  KOR = 'KOR',
  KWT = 'KWT',
  KGZ = 'KGZ',
  LAO = 'LAO',
  LVA = 'LVA',
  LBN = 'LBN',
  LSO = 'LSO',
  LBR = 'LBR',
  LBY = 'LBY',
  LIE = 'LIE',
  LTU = 'LTU',
  LUX = 'LUX',
  MAC = 'MAC',
  MDG = 'MDG',
  MWI = 'MWI',
  MYS = 'MYS',
  MDV = 'MDV',
  MLI = 'MLI',
  MLT = 'MLT',
  MHL = 'MHL',
  MTQ = 'MTQ',
  MRT = 'MRT',
  MUS = 'MUS',
  MYT = 'MYT',
  MEX = 'MEX',
  FSM = 'FSM',
  MDA = 'MDA',
  MCO = 'MCO',
  MNG = 'MNG',
  MNE = 'MNE',
  MSR = 'MSR',
  MAR = 'MAR',
  MOZ = 'MOZ',
  MMR = 'MMR',
  NAM = 'NAM',
  NRU = 'NRU',
  NPL = 'NPL',
  NLD = 'NLD',
  NCL = 'NCL',
  NZL = 'NZL',
  NIC = 'NIC',
  NER = 'NER',
  NGA = 'NGA',
  NIU = 'NIU',
  NFK = 'NFK',
  MKD = 'MKD',
  MNP = 'MNP',
  NOR = 'NOR',
  OMN = 'OMN',
  PAK = 'PAK',
  PLW = 'PLW',
  PSE = 'PSE',
  PAN = 'PAN',
  PNG = 'PNG',
  PRY = 'PRY',
  PER = 'PER',
  PHL = 'PHL',
  PCN = 'PCN',
  POL = 'POL',
  PRT = 'PRT',
  PRI = 'PRI',
  QAT = 'QAT',
  REU = 'REU',
  ROU = 'ROU',
  RUS = 'RUS',
  RWA = 'RWA',
  BLM = 'BLM',
  SHN = 'SHN',
  KNA = 'KNA',
  LCA = 'LCA',
  MAF = 'MAF',
  SPM = 'SPM',
  VCT = 'VCT',
  WSM = 'WSM',
  SMR = 'SMR',
  STP = 'STP',
  SAU = 'SAU',
  SEN = 'SEN',
  SRB = 'SRB',
  SYC = 'SYC',
  SLE = 'SLE',
  SGP = 'SGP',
  SXM = 'SXM',
  SVK = 'SVK',
  SVN = 'SVN',
  SLB = 'SLB',
  SOM = 'SOM',
  ZAF = 'ZAF',
  SGS = 'SGS',
  SSD = 'SSD',
  ESP = 'ESP',
  LKA = 'LKA',
  SDN = 'SDN',
  SUR = 'SUR',
  SJM = 'SJM',
  SWE = 'SWE',
  CHE = 'CHE',
  SYR = 'SYR',
  TWN = 'TWN',
  TJK = 'TJK',
  TZA = 'TZA',
  THA = 'THA',
  TLS = 'TLS',
  TGO = 'TGO',
  TKL = 'TKL',
  TON = 'TON',
  TTO = 'TTO',
  TUN = 'TUN',
  TUR = 'TUR',
  TKM = 'TKM',
  TCA = 'TCA',
  TUV = 'TUV',
  UGA = 'UGA',
  UKR = 'UKR',
  ARE = 'ARE',
  GBR = 'GBR',
  USA = 'USA',
  UMI = 'UMI',
  URY = 'URY',
  UZB = 'UZB',
  VUT = 'VUT',
  VEN = 'VEN',
  VNM = 'VNM',
  VGB = 'VGB',
  VIR = 'VIR',
  WLF = 'WLF',
  ESH = 'ESH',
  YEM = 'YEM',
  ZMB = 'ZMB',
  ZWE = 'ZWE'
}

export type GeopointInput = {
  lat: number
  lon: number
}

export enum LocationType {
  Primary = 'Primary',
  Current = 'Current',
  Pod = 'Pod',
  Home = 'Home',
  Office = 'Office',
  Other = 'Other'
}

export enum DataSource {
  Refer = 'Refer',
  ReferralKey = 'ReferralKey'
}

export type UpdatePodInput = {
  id: string
  name?: string | null
  description?: string | null
  startTime?: string | null
  endTime?: string | null
  location?: LocationInput | null
  createdAt?: string | null
  updatedAt?: string | null
  podOwnerId?: string | null
  expectedVersion: number
}

export type DeletePodInput = {
  id?: string | null
  expectedVersion: number
}

export type CreatePostInput = {
  id?: string | null
  title: string
  body?: string | null
  link?: string | null
  image?: string | null
  createdAt?: string | null
  updatedAt?: string | null
  postOwnerId: string
}

export type UpdatePostInput = {
  id: string
  title?: string | null
  body?: string | null
  link?: string | null
  image?: string | null
  createdAt?: string | null
  updatedAt?: string | null
  postOwnerId?: string | null
}

export type DeletePostInput = {
  id?: string | null
}

export type CreateProfileInput = {
  id?: string | null
  name?: string | null
  title?: string | null
  picture?: string | null
  avatar?: string | null
  emails?: Array<EmailInput | null> | null
  phoneNumbers?: Array<PhoneInput | null> | null
  locations?: Array<LocationInput | null> | null
  dataSource?: DataSource | null
  rkId?: number | null
  createdAt?: string | null
  updatedAt?: string | null
  podPodAttendeesId?: string | null
  profileMyNetworkId?: string | null
}

export type EmailInput = {
  email: string
  type: EmailType
}

export enum EmailType {
  Primary = 'Primary',
  Personal = 'Personal',
  Work = 'Work',
  Other = 'Other'
}

export type PhoneInput = {
  phone: string
  type: PhoneType
}

export enum PhoneType {
  Cell = 'Cell',
  Home = 'Home',
  Work = 'Work',
  Other = 'Other'
}

export type UpdateProfileInput = {
  id: string
  name?: string | null
  title?: string | null
  picture?: string | null
  avatar?: string | null
  emails?: Array<EmailInput | null> | null
  phoneNumbers?: Array<PhoneInput | null> | null
  locations?: Array<LocationInput | null> | null
  dataSource?: DataSource | null
  rkId?: number | null
  createdAt?: string | null
  updatedAt?: string | null
  podPodAttendeesId?: string | null
  profileMyNetworkId?: string | null
}

export type DeleteProfileInput = {
  id?: string | null
}

export type SearchableDistanceInput = {
  value?: number | null
  unit?: SearchableDistanceUnitInput | null
}

export enum SearchableDistanceUnitInput {
  km = 'km',
  mi = 'mi'
}

export enum SearchableSortDirection {
  asc = 'asc',
  desc = 'desc'
}

export type ModelPodFilterInput = {
  id?: ModelIDFilterInput | null
  name?: ModelStringFilterInput | null
  description?: ModelStringFilterInput | null
  startTime?: ModelStringFilterInput | null
  endTime?: ModelStringFilterInput | null
  createdAt?: ModelStringFilterInput | null
  updatedAt?: ModelStringFilterInput | null
  and?: Array<ModelPodFilterInput | null> | null
  or?: Array<ModelPodFilterInput | null> | null
  not?: ModelPodFilterInput | null
}

export type ModelIDFilterInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
}

export type ModelStringFilterInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
}

export type ModelPostFilterInput = {
  id?: ModelIDFilterInput | null
  title?: ModelStringFilterInput | null
  body?: ModelStringFilterInput | null
  link?: ModelStringFilterInput | null
  image?: ModelStringFilterInput | null
  createdAt?: ModelStringFilterInput | null
  updatedAt?: ModelStringFilterInput | null
  and?: Array<ModelPostFilterInput | null> | null
  or?: Array<ModelPostFilterInput | null> | null
  not?: ModelPostFilterInput | null
}

export type ModelProfileFilterInput = {
  id?: ModelIDFilterInput | null
  name?: ModelStringFilterInput | null
  title?: ModelStringFilterInput | null
  picture?: ModelStringFilterInput | null
  avatar?: ModelStringFilterInput | null
  dataSource?: ModelDataSourceFilterInput | null
  rkId?: ModelIntFilterInput | null
  createdAt?: ModelStringFilterInput | null
  updatedAt?: ModelStringFilterInput | null
  and?: Array<ModelProfileFilterInput | null> | null
  or?: Array<ModelProfileFilterInput | null> | null
  not?: ModelProfileFilterInput | null
}

export type ModelDataSourceFilterInput = {
  eq?: DataSource | null
  ne?: DataSource | null
}

export type ModelIntFilterInput = {
  ne?: number | null
  eq?: number | null
  le?: number | null
  lt?: number | null
  ge?: number | null
  gt?: number | null
  contains?: number | null
  notContains?: number | null
  between?: Array<number | null> | null
}

export type SearchablePodFilterInput = {
  id?: SearchableIDFilterInput | null
  name?: SearchableStringFilterInput | null
  description?: SearchableStringFilterInput | null
  startTime?: SearchableStringFilterInput | null
  endTime?: SearchableStringFilterInput | null
  createdAt?: SearchableStringFilterInput | null
  updatedAt?: SearchableStringFilterInput | null
  and?: Array<SearchablePodFilterInput | null> | null
  or?: Array<SearchablePodFilterInput | null> | null
  not?: SearchablePodFilterInput | null
}

export type SearchableIDFilterInput = {
  ne?: string | null
  eq?: string | null
  match?: string | null
  matchPhrase?: string | null
  matchPhrasePrefix?: string | null
  multiMatch?: string | null
  exists?: boolean | null
  wildcard?: string | null
  regexp?: string | null
}

export type SearchableStringFilterInput = {
  ne?: string | null
  eq?: string | null
  match?: string | null
  matchPhrase?: string | null
  matchPhrasePrefix?: string | null
  multiMatch?: string | null
  exists?: boolean | null
  wildcard?: string | null
  regexp?: string | null
}

export type SearchablePodSortInput = {
  field?: SearchablePodSortableFields | null
  direction?: SearchableSortDirection | null
}

export enum SearchablePodSortableFields {
  id = 'id',
  name = 'name',
  description = 'description',
  startTime = 'startTime',
  endTime = 'endTime',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt'
}

export type SearchablePostFilterInput = {
  id?: SearchableIDFilterInput | null
  title?: SearchableStringFilterInput | null
  body?: SearchableStringFilterInput | null
  link?: SearchableStringFilterInput | null
  image?: SearchableStringFilterInput | null
  createdAt?: SearchableStringFilterInput | null
  updatedAt?: SearchableStringFilterInput | null
  and?: Array<SearchablePostFilterInput | null> | null
  or?: Array<SearchablePostFilterInput | null> | null
  not?: SearchablePostFilterInput | null
}

export type SearchablePostSortInput = {
  field?: SearchablePostSortableFields | null
  direction?: SearchableSortDirection | null
}

export enum SearchablePostSortableFields {
  id = 'id',
  title = 'title',
  body = 'body',
  link = 'link',
  image = 'image',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt'
}

export type SearchableProfileFilterInput = {
  id?: SearchableIDFilterInput | null
  name?: SearchableStringFilterInput | null
  title?: SearchableStringFilterInput | null
  picture?: SearchableStringFilterInput | null
  avatar?: SearchableStringFilterInput | null
  rkId?: SearchableIntFilterInput | null
  createdAt?: SearchableStringFilterInput | null
  updatedAt?: SearchableStringFilterInput | null
  and?: Array<SearchableProfileFilterInput | null> | null
  or?: Array<SearchableProfileFilterInput | null> | null
  not?: SearchableProfileFilterInput | null
}

export type SearchableIntFilterInput = {
  ne?: number | null
  gt?: number | null
  lt?: number | null
  gte?: number | null
  lte?: number | null
  eq?: number | null
  range?: Array<number | null> | null
}

export type SearchableProfileSortInput = {
  field?: SearchableProfileSortableFields | null
  direction?: SearchableSortDirection | null
}

export enum SearchableProfileSortableFields {
  id = 'id',
  name = 'name',
  title = 'title',
  picture = 'picture',
  avatar = 'avatar',
  rkId = 'rkId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt'
}

export type CreatePodMutationVariables = {
  input: CreatePodInput
}

export type CreatePodMutation = {
  createPod: {
    __typename: 'Pod'
    id: string
    name: string
    description: string | null
    startTime: string
    endTime: string
    location: {
      __typename: 'Location'
      type: LocationType | null
    }
    owner: {
      __typename: 'Profile'
      id: string
      name: string | null
      title: string | null
      picture: string | null
      avatar: string | null
      dataSource: DataSource | null
      rkId: number | null
      createdAt: string | null
      updatedAt: string | null
    }
    podAttendees: {
      __typename: 'ModelProfileConnection'
      nextToken: string | null
    } | null
    createdAt: string | null
    updatedAt: string | null
    version: number
  } | null
}

export type UpdatePodMutationVariables = {
  input: UpdatePodInput
}

export type UpdatePodMutation = {
  updatePod: {
    __typename: 'Pod'
    id: string
    name: string
    description: string | null
    startTime: string
    endTime: string
    location: {
      __typename: 'Location'
      type: LocationType | null
    }
    owner: {
      __typename: 'Profile'
      id: string
      name: string | null
      title: string | null
      picture: string | null
      avatar: string | null
      dataSource: DataSource | null
      rkId: number | null
      createdAt: string | null
      updatedAt: string | null
    }
    podAttendees: {
      __typename: 'ModelProfileConnection'
      nextToken: string | null
    } | null
    createdAt: string | null
    updatedAt: string | null
    version: number
  } | null
}

export type DeletePodMutationVariables = {
  input: DeletePodInput
}

export type DeletePodMutation = {
  deletePod: {
    __typename: 'Pod'
    id: string
    name: string
    description: string | null
    startTime: string
    endTime: string
    location: {
      __typename: 'Location'
      type: LocationType | null
    }
    owner: {
      __typename: 'Profile'
      id: string
      name: string | null
      title: string | null
      picture: string | null
      avatar: string | null
      dataSource: DataSource | null
      rkId: number | null
      createdAt: string | null
      updatedAt: string | null
    }
    podAttendees: {
      __typename: 'ModelProfileConnection'
      nextToken: string | null
    } | null
    createdAt: string | null
    updatedAt: string | null
    version: number
  } | null
}

export type CreatePostMutationVariables = {
  input: CreatePostInput
}

export type CreatePostMutation = {
  createPost: {
    __typename: 'Post'
    id: string
    title: string
    body: string | null
    link: string | null
    image: string | null
    owner: {
      __typename: 'Profile'
      id: string
      name: string | null
      title: string | null
      picture: string | null
      avatar: string | null
      dataSource: DataSource | null
      rkId: number | null
      createdAt: string | null
      updatedAt: string | null
    }
    createdAt: string | null
    updatedAt: string | null
  } | null
}

export type UpdatePostMutationVariables = {
  input: UpdatePostInput
}

export type UpdatePostMutation = {
  updatePost: {
    __typename: 'Post'
    id: string
    title: string
    body: string | null
    link: string | null
    image: string | null
    owner: {
      __typename: 'Profile'
      id: string
      name: string | null
      title: string | null
      picture: string | null
      avatar: string | null
      dataSource: DataSource | null
      rkId: number | null
      createdAt: string | null
      updatedAt: string | null
    }
    createdAt: string | null
    updatedAt: string | null
  } | null
}

export type DeletePostMutationVariables = {
  input: DeletePostInput
}

export type DeletePostMutation = {
  deletePost: {
    __typename: 'Post'
    id: string
    title: string
    body: string | null
    link: string | null
    image: string | null
    owner: {
      __typename: 'Profile'
      id: string
      name: string | null
      title: string | null
      picture: string | null
      avatar: string | null
      dataSource: DataSource | null
      rkId: number | null
      createdAt: string | null
      updatedAt: string | null
    }
    createdAt: string | null
    updatedAt: string | null
  } | null
}

export type CreateProfileMutationVariables = {
  input: CreateProfileInput
}

export type CreateProfileMutation = {
  createProfile: {
    __typename: 'Profile'
    id: string
    name: string | null
    title: string | null
    picture: string | null
    avatar: string | null
    emails: Array<{
      __typename: 'Email'
      email: string
      type: EmailType
    } | null> | null
    phoneNumbers: Array<{
      __typename: 'Phone'
      phone: string
      type: PhoneType
    } | null> | null
    locations: Array<{
      __typename: 'Location'
      type: LocationType | null
    } | null> | null
    posts: {
      __typename: 'ModelPostConnection'
      nextToken: string | null
    } | null
    pods: {
      __typename: 'ModelPodConnection'
      nextToken: string | null
    } | null
    myNetwork: {
      __typename: 'ModelProfileConnection'
      nextToken: string | null
    } | null
    dataSource: DataSource | null
    rkId: number | null
    createdAt: string | null
    updatedAt: string | null
  } | null
}

export type UpdateProfileMutationVariables = {
  input: UpdateProfileInput
}

export type UpdateProfileMutation = {
  updateProfile: {
    __typename: 'Profile'
    id: string
    name: string | null
    title: string | null
    picture: string | null
    avatar: string | null
    emails: Array<{
      __typename: 'Email'
      email: string
      type: EmailType
    } | null> | null
    phoneNumbers: Array<{
      __typename: 'Phone'
      phone: string
      type: PhoneType
    } | null> | null
    locations: Array<{
      __typename: 'Location'
      type: LocationType | null
    } | null> | null
    posts: {
      __typename: 'ModelPostConnection'
      nextToken: string | null
    } | null
    pods: {
      __typename: 'ModelPodConnection'
      nextToken: string | null
    } | null
    myNetwork: {
      __typename: 'ModelProfileConnection'
      nextToken: string | null
    } | null
    dataSource: DataSource | null
    rkId: number | null
    createdAt: string | null
    updatedAt: string | null
  } | null
}

export type DeleteProfileMutationVariables = {
  input: DeleteProfileInput
}

export type DeleteProfileMutation = {
  deleteProfile: {
    __typename: 'Profile'
    id: string
    name: string | null
    title: string | null
    picture: string | null
    avatar: string | null
    emails: Array<{
      __typename: 'Email'
      email: string
      type: EmailType
    } | null> | null
    phoneNumbers: Array<{
      __typename: 'Phone'
      phone: string
      type: PhoneType
    } | null> | null
    locations: Array<{
      __typename: 'Location'
      type: LocationType | null
    } | null> | null
    posts: {
      __typename: 'ModelPostConnection'
      nextToken: string | null
    } | null
    pods: {
      __typename: 'ModelPodConnection'
      nextToken: string | null
    } | null
    myNetwork: {
      __typename: 'ModelProfileConnection'
      nextToken: string | null
    } | null
    dataSource: DataSource | null
    rkId: number | null
    createdAt: string | null
    updatedAt: string | null
  } | null
}

export type CREATE_PROFILE_MUTATIONMutationVariables = {
  input: CreateProfileInput
}

export type CREATE_PROFILE_MUTATIONMutation = {
  createProfile: {
    __typename: 'Profile'
    id: string
  } | null
}

export type SEARCH_PROFILES_QUERYQueryVariables = {
  path?: string | null
  body?: string | null
}

export type SEARCH_PROFILES_QUERYQuery = {
  freeSearch: string | null
}

export type AuthMyProfileQueryVariables = {
  id: string
}

export type AuthMyProfileQuery = {
  getProfile: {
    __typename: 'Profile'
    id: string
    name: string | null
    avatar: string | null
    emails: Array<{
      __typename: 'Email'
      type: EmailType
      email: string
    } | null> | null
  } | null
}

export type FreeSearchQueryVariables = {
  path?: string | null
  body?: string | null
}

export type FreeSearchQuery = {
  freeSearch: string | null
}

export type NearbyProfilesQueryVariables = {
  geopoint: GeopointInput
  distance?: SearchableDistanceInput | null
  filter?: string | null
  direction?: SearchableSortDirection | null
  limit?: number | null
  nextToken?: number | null
}

export type NearbyProfilesQuery = {
  nearbyProfiles: {
    __typename: 'SearchableProfileConnection'
    items: Array<{
      __typename: 'Profile'
      id: string
      name: string | null
      title: string | null
      picture: string | null
      avatar: string | null
      dataSource: DataSource | null
      rkId: number | null
      createdAt: string | null
      updatedAt: string | null
    } | null> | null
    nextToken: string | null
  } | null
}

export type GetPodQueryVariables = {
  id: string
}

export type GetPodQuery = {
  getPod: {
    __typename: 'Pod'
    id: string
    name: string
    description: string | null
    startTime: string
    endTime: string
    location: {
      __typename: 'Location'
      type: LocationType | null
    }
    owner: {
      __typename: 'Profile'
      id: string
      name: string | null
      title: string | null
      picture: string | null
      avatar: string | null
      dataSource: DataSource | null
      rkId: number | null
      createdAt: string | null
      updatedAt: string | null
    }
    podAttendees: {
      __typename: 'ModelProfileConnection'
      nextToken: string | null
    } | null
    createdAt: string | null
    updatedAt: string | null
    version: number
  } | null
}

export type ListPodsQueryVariables = {
  filter?: ModelPodFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListPodsQuery = {
  listPods: {
    __typename: 'ModelPodConnection'
    items: Array<{
      __typename: 'Pod'
      id: string
      name: string
      description: string | null
      startTime: string
      endTime: string
      createdAt: string | null
      updatedAt: string | null
      version: number
    } | null> | null
    nextToken: string | null
  } | null
}

export type GetPostQueryVariables = {
  id: string
}

export type GetPostQuery = {
  getPost: {
    __typename: 'Post'
    id: string
    title: string
    body: string | null
    link: string | null
    image: string | null
    owner: {
      __typename: 'Profile'
      id: string
      name: string | null
      title: string | null
      picture: string | null
      avatar: string | null
      dataSource: DataSource | null
      rkId: number | null
      createdAt: string | null
      updatedAt: string | null
    }
    createdAt: string | null
    updatedAt: string | null
  } | null
}

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListPostsQuery = {
  listPosts: {
    __typename: 'ModelPostConnection'
    items: Array<{
      __typename: 'Post'
      id: string
      title: string
      body: string | null
      link: string | null
      image: string | null
      createdAt: string | null
      updatedAt: string | null
    } | null> | null
    nextToken: string | null
  } | null
}

export type GetProfileQueryVariables = {
  id: string
}

export type GetProfileQuery = {
  getProfile: {
    __typename: 'Profile'
    id: string
    name: string | null
    title: string | null
    picture: string | null
    avatar: string | null
    emails: Array<{
      __typename: 'Email'
      email: string
      type: EmailType
    } | null> | null
    phoneNumbers: Array<{
      __typename: 'Phone'
      phone: string
      type: PhoneType
    } | null> | null
    locations: Array<{
      __typename: 'Location'
      type: LocationType | null
    } | null> | null
    posts: {
      __typename: 'ModelPostConnection'
      nextToken: string | null
    } | null
    pods: {
      __typename: 'ModelPodConnection'
      nextToken: string | null
    } | null
    myNetwork: {
      __typename: 'ModelProfileConnection'
      nextToken: string | null
    } | null
    dataSource: DataSource | null
    rkId: number | null
    createdAt: string | null
    updatedAt: string | null
  } | null
}

export type ListProfilesQueryVariables = {
  filter?: ModelProfileFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListProfilesQuery = {
  listProfiles: {
    __typename: 'ModelProfileConnection'
    items: Array<{
      __typename: 'Profile'
      id: string
      name: string | null
      title: string | null
      picture: string | null
      avatar: string | null
      dataSource: DataSource | null
      rkId: number | null
      createdAt: string | null
      updatedAt: string | null
    } | null> | null
    nextToken: string | null
  } | null
}

export type SearchPodsQueryVariables = {
  filter?: SearchablePodFilterInput | null
  sort?: SearchablePodSortInput | null
  limit?: number | null
  nextToken?: number | null
}

export type SearchPodsQuery = {
  searchPods: {
    __typename: 'SearchablePodConnection'
    items: Array<{
      __typename: 'Pod'
      id: string
      name: string
      description: string | null
      startTime: string
      endTime: string
      createdAt: string | null
      updatedAt: string | null
      version: number
    } | null> | null
    nextToken: string | null
  } | null
}

export type SearchPostsQueryVariables = {
  filter?: SearchablePostFilterInput | null
  sort?: SearchablePostSortInput | null
  limit?: number | null
  nextToken?: number | null
}

export type SearchPostsQuery = {
  searchPosts: {
    __typename: 'SearchablePostConnection'
    items: Array<{
      __typename: 'Post'
      id: string
      title: string
      body: string | null
      link: string | null
      image: string | null
      createdAt: string | null
      updatedAt: string | null
    } | null> | null
    nextToken: string | null
  } | null
}

export type SearchProfilesQueryVariables = {
  filter?: SearchableProfileFilterInput | null
  sort?: SearchableProfileSortInput | null
  limit?: number | null
  nextToken?: number | null
}

export type SearchProfilesQuery = {
  searchProfiles: {
    __typename: 'SearchableProfileConnection'
    items: Array<{
      __typename: 'Profile'
      id: string
      name: string | null
      title: string | null
      picture: string | null
      avatar: string | null
      dataSource: DataSource | null
      rkId: number | null
      createdAt: string | null
      updatedAt: string | null
    } | null> | null
    nextToken: string | null
  } | null
}

export type OnCreatePodSubscription = {
  onCreatePod: {
    __typename: 'Pod'
    id: string
    name: string
    description: string | null
    startTime: string
    endTime: string
    location: {
      __typename: 'Location'
      type: LocationType | null
    }
    owner: {
      __typename: 'Profile'
      id: string
      name: string | null
      title: string | null
      picture: string | null
      avatar: string | null
      dataSource: DataSource | null
      rkId: number | null
      createdAt: string | null
      updatedAt: string | null
    }
    podAttendees: {
      __typename: 'ModelProfileConnection'
      nextToken: string | null
    } | null
    createdAt: string | null
    updatedAt: string | null
    version: number
  } | null
}

export type OnUpdatePodSubscription = {
  onUpdatePod: {
    __typename: 'Pod'
    id: string
    name: string
    description: string | null
    startTime: string
    endTime: string
    location: {
      __typename: 'Location'
      type: LocationType | null
    }
    owner: {
      __typename: 'Profile'
      id: string
      name: string | null
      title: string | null
      picture: string | null
      avatar: string | null
      dataSource: DataSource | null
      rkId: number | null
      createdAt: string | null
      updatedAt: string | null
    }
    podAttendees: {
      __typename: 'ModelProfileConnection'
      nextToken: string | null
    } | null
    createdAt: string | null
    updatedAt: string | null
    version: number
  } | null
}

export type OnDeletePodSubscription = {
  onDeletePod: {
    __typename: 'Pod'
    id: string
    name: string
    description: string | null
    startTime: string
    endTime: string
    location: {
      __typename: 'Location'
      type: LocationType | null
    }
    owner: {
      __typename: 'Profile'
      id: string
      name: string | null
      title: string | null
      picture: string | null
      avatar: string | null
      dataSource: DataSource | null
      rkId: number | null
      createdAt: string | null
      updatedAt: string | null
    }
    podAttendees: {
      __typename: 'ModelProfileConnection'
      nextToken: string | null
    } | null
    createdAt: string | null
    updatedAt: string | null
    version: number
  } | null
}

export type OnCreatePostSubscription = {
  onCreatePost: {
    __typename: 'Post'
    id: string
    title: string
    body: string | null
    link: string | null
    image: string | null
    owner: {
      __typename: 'Profile'
      id: string
      name: string | null
      title: string | null
      picture: string | null
      avatar: string | null
      dataSource: DataSource | null
      rkId: number | null
      createdAt: string | null
      updatedAt: string | null
    }
    createdAt: string | null
    updatedAt: string | null
  } | null
}

export type OnUpdatePostSubscription = {
  onUpdatePost: {
    __typename: 'Post'
    id: string
    title: string
    body: string | null
    link: string | null
    image: string | null
    owner: {
      __typename: 'Profile'
      id: string
      name: string | null
      title: string | null
      picture: string | null
      avatar: string | null
      dataSource: DataSource | null
      rkId: number | null
      createdAt: string | null
      updatedAt: string | null
    }
    createdAt: string | null
    updatedAt: string | null
  } | null
}

export type OnDeletePostSubscription = {
  onDeletePost: {
    __typename: 'Post'
    id: string
    title: string
    body: string | null
    link: string | null
    image: string | null
    owner: {
      __typename: 'Profile'
      id: string
      name: string | null
      title: string | null
      picture: string | null
      avatar: string | null
      dataSource: DataSource | null
      rkId: number | null
      createdAt: string | null
      updatedAt: string | null
    }
    createdAt: string | null
    updatedAt: string | null
  } | null
}

export type OnCreateProfileSubscription = {
  onCreateProfile: {
    __typename: 'Profile'
    id: string
    name: string | null
    title: string | null
    picture: string | null
    avatar: string | null
    emails: Array<{
      __typename: 'Email'
      email: string
      type: EmailType
    } | null> | null
    phoneNumbers: Array<{
      __typename: 'Phone'
      phone: string
      type: PhoneType
    } | null> | null
    locations: Array<{
      __typename: 'Location'
      type: LocationType | null
    } | null> | null
    posts: {
      __typename: 'ModelPostConnection'
      nextToken: string | null
    } | null
    pods: {
      __typename: 'ModelPodConnection'
      nextToken: string | null
    } | null
    myNetwork: {
      __typename: 'ModelProfileConnection'
      nextToken: string | null
    } | null
    dataSource: DataSource | null
    rkId: number | null
    createdAt: string | null
    updatedAt: string | null
  } | null
}

export type OnUpdateProfileSubscription = {
  onUpdateProfile: {
    __typename: 'Profile'
    id: string
    name: string | null
    title: string | null
    picture: string | null
    avatar: string | null
    emails: Array<{
      __typename: 'Email'
      email: string
      type: EmailType
    } | null> | null
    phoneNumbers: Array<{
      __typename: 'Phone'
      phone: string
      type: PhoneType
    } | null> | null
    locations: Array<{
      __typename: 'Location'
      type: LocationType | null
    } | null> | null
    posts: {
      __typename: 'ModelPostConnection'
      nextToken: string | null
    } | null
    pods: {
      __typename: 'ModelPodConnection'
      nextToken: string | null
    } | null
    myNetwork: {
      __typename: 'ModelProfileConnection'
      nextToken: string | null
    } | null
    dataSource: DataSource | null
    rkId: number | null
    createdAt: string | null
    updatedAt: string | null
  } | null
}

export type OnDeleteProfileSubscription = {
  onDeleteProfile: {
    __typename: 'Profile'
    id: string
    name: string | null
    title: string | null
    picture: string | null
    avatar: string | null
    emails: Array<{
      __typename: 'Email'
      email: string
      type: EmailType
    } | null> | null
    phoneNumbers: Array<{
      __typename: 'Phone'
      phone: string
      type: PhoneType
    } | null> | null
    locations: Array<{
      __typename: 'Location'
      type: LocationType | null
    } | null> | null
    posts: {
      __typename: 'ModelPostConnection'
      nextToken: string | null
    } | null
    pods: {
      __typename: 'ModelPodConnection'
      nextToken: string | null
    } | null
    myNetwork: {
      __typename: 'ModelProfileConnection'
      nextToken: string | null
    } | null
    dataSource: DataSource | null
    rkId: number | null
    createdAt: string | null
    updatedAt: string | null
  } | null
}
