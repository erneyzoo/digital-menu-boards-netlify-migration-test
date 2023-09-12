// THIS IS A GENERATED FILE, use `yarn codegen` to regenerate
/* tslint:disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BuildYourOwnProduct = Node & {
  __typename?: 'BuildYourOwnProduct';
  description: Scalars['String'];
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  limit: BuildYourOwnProductLimit;
  name: Scalars['String'];
  productVariations: Array<ProductVariation>;
  steps: Array<BuildYourOwnProductStep>;
  thumbnailUrl: Scalars['String'];
};

export type BuildYourOwnProductProductVariationsArgs = {
  storeId: Scalars['ID'];
};

export type BuildYourOwnProductLimit = {
  __typename?: 'BuildYourOwnProductLimit';
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
};

export type BuildYourOwnProductStep = Node & {
  __typename?: 'BuildYourOwnProductStep';
  allowMultipleIngredientSelect: Scalars['Boolean'];
  countable: Scalars['Boolean'];
  description: Scalars['String'];
  id: Scalars['ID'];
  ingredients: Array<Ingredient>;
  limit: BuildYourOwnProductStepLimit;
  name: Scalars['String'];
};

export type BuildYourOwnProductStepLimit = {
  __typename?: 'BuildYourOwnProductStepLimit';
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
};

export type CalculateCartOrderInput = {
  cartItems: Array<CartItemInput>;
  couponHash?: InputMaybe<Scalars['String']>;
  storeId: Scalars['ID'];
};

export type CalculateCartOrderPayload = {
  __typename?: 'CalculateCartOrderPayload';
  discount: Scalars['String'];
  discountInCents: Scalars['Int'];
  orderItems: Array<OrderItem>;
  store: Store;
  totalAmountInCents: Scalars['Int'];
  totalPrice: Scalars['String'];
};

export type Campaign = Node & {
  __typename?: 'Campaign';
  bannerUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type CartItemInput = {
  id: Scalars['ID'];
  ingredientItems: Array<IngredientItemInput>;
  productVariationId: Scalars['ID'];
  quantity: Scalars['Int'];
};

export type CartOrderItem = {
  __typename?: 'CartOrderItem';
  amountInCents: Scalars['Int'];
  name: Scalars['String'];
};

export type CartOrderValidationInput = {
  cartItems: Array<CartItemInput>;
  coupon?: InputMaybe<CouponInput>;
  pickupDateTime?: InputMaybe<Scalars['String']>;
  resumePaymentIntentId?: InputMaybe<Scalars['String']>;
  storeId: Scalars['ID'];
  totalAmountInCents: Scalars['Int'];
};

export type CartOrderValidationPayload = {
  __typename?: 'CartOrderValidationPayload';
  cartOrderItems: Array<CartOrderItem>;
  stripePaymentSheet: StripePaymentSheet;
  totalPrice: Scalars['String'];
};

export type Challenge = Node & {
  __typename?: 'Challenge';
  attemptsLimit: Scalars['String'];
  backgroundColor?: Maybe<Scalars['String']>;
  buttonBackground?: Maybe<Scalars['String']>;
  buttonColor?: Maybe<Scalars['String']>;
  buttonText?: Maybe<Scalars['String']>;
  challengeDetail?: Maybe<ChallengeDetail>;
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  name: Scalars['String'];
  restrictions?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type ChallengeDetail = {
  __typename?: 'ChallengeDetail';
  id: Scalars['ID'];
  popupContent: Scalars['String'];
  popupHeader: Scalars['String'];
};

export type CodewordChallenge = Node & {
  __typename?: 'CodewordChallenge';
  challengeId: Scalars['String'];
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  question?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type CouponInput = {
  Discount?: InputMaybe<Scalars['Int']>;
  Hash?: InputMaybe<Scalars['String']>;
};

export type CreateBuildYourOwnProductCartItem = {
  __typename?: 'CreateBuildYourOwnProductCartItem';
  id: Scalars['ID'];
  ingredientItems: Array<CreateBuildYourOwnProductIngredientItem>;
  productVariationId: Scalars['ID'];
  quantity: Scalars['Int'];
};

export type CreateBuildYourOwnProductIngredientItem = {
  __typename?: 'CreateBuildYourOwnProductIngredientItem';
  ingredientVariationId: Scalars['ID'];
  quantity: Scalars['Int'];
};

export type CreateBuildYourOwnProductInput = {
  buildYourOwnProductId: Scalars['ID'];
  productVariationId: Scalars['ID'];
  steps: Array<IngredientsForStepInput>;
  storeId: Scalars['ID'];
};

export type CreateBuildYourOwnProductPayload = {
  __typename?: 'CreateBuildYourOwnProductPayload';
  cartItem?: Maybe<CreateBuildYourOwnProductCartItem>;
};

export type CreateCustomisedProductCartItem = {
  __typename?: 'CreateCustomisedProductCartItem';
  ingredientItems: Array<CreateCustomisedProductIngredientItem>;
  productVariationId: Scalars['ID'];
  quantity: Scalars['Int'];
};

export type CreateCustomisedProductIngredientFamilyInput = {
  id: Scalars['ID'];
  ingredients: Array<Scalars['ID']>;
};

export type CreateCustomisedProductIngredientInput = {
  removeIngredientId: Scalars['ID'];
  replaceIngredientId?: InputMaybe<Scalars['ID']>;
};

export type CreateCustomisedProductIngredientItem = {
  __typename?: 'CreateCustomisedProductIngredientItem';
  ingredientVariationId: Scalars['ID'];
  quantity: Scalars['Int'];
};

export type CreateCustomisedProductInput = {
  ingredientFamilies: Array<CreateCustomisedProductIngredientFamilyInput>;
  ingredients: Array<CreateCustomisedProductIngredientInput>;
  productVariationId: Scalars['ID'];
  storeId: Scalars['ID'];
};

export type CreateCustomisedProductPayload = {
  __typename?: 'CreateCustomisedProductPayload';
  cartItem?: Maybe<CreateCustomisedProductCartItem>;
};

export type CupCode = {
  __typename?: 'CupCode';
  code: Scalars['String'];
  id: Scalars['ID'];
};

export type Entry = {
  __typename?: 'Entry';
  acceptPersonalInformationShare?: Maybe<Scalars['Boolean']>;
  acceptTermsAndConditions?: Maybe<Scalars['Boolean']>;
  contactNumber?: Maybe<Scalars['String']>;
  cupCode: CupCode;
  emailAddress?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  prize: Prize;
  state?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  subscribeToMarketing?: Maybe<Scalars['Boolean']>;
  suburb?: Maybe<Scalars['String']>;
};

export type HomeTile = Node & {
  __typename?: 'HomeTile';
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  payload: Scalars['String'];
  screenName: Scalars['String'];
  tabName: Scalars['String'];
};

export type Ingredient = Node & {
  __typename?: 'Ingredient';
  amountInCents?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  price?: Maybe<Scalars['String']>;
  removable?: Maybe<Scalars['Boolean']>;
  swappable?: Maybe<Scalars['Boolean']>;
  swappableWithIngredientFamily?: Maybe<IngredientFamily>;
  upsellIngredientVariationId?: Maybe<Scalars['ID']>;
  vegan: Scalars['Boolean'];
};

export type IngredientFamily = Node & {
  __typename?: 'IngredientFamily';
  countable: Scalars['Boolean'];
  id: Scalars['ID'];
  ingredients: Array<Ingredient>;
  limit: IngredientFamilyLimit;
  name: Scalars['String'];
};

export type IngredientFamilyIngredientsArgs = {
  ingredientCategoryName: Scalars['String'];
  storeId: Scalars['ID'];
};

export type IngredientFamilyLimit = {
  __typename?: 'IngredientFamilyLimit';
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
};

export type IngredientItemInput = {
  ingredientVariationId: Scalars['ID'];
  quantity: Scalars['Int'];
};

export type IngredientsForStepInput = {
  id: Scalars['ID'];
  ingredientItems: Array<Scalars['ID']>;
};

export type LocationFilter = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  maxDistance: Scalars['Float'];
};

export type Member = Node & {
  __typename?: 'Member';
  barcode?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  memberNumber?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
};

export type MemberBalance = {
  __typename?: 'MemberBalance';
  money: Scalars['String'];
  moneyAccumulated: Scalars['String'];
  moneyInDollars: Scalars['Float'];
  moneyRedeemed: Scalars['String'];
  points: Scalars['Float'];
  pointsAccumulated: Scalars['Float'];
  pointsRedeemed: Scalars['Float'];
};

export type MemberChangePasswordMutationInput = {
  brandId: Scalars['ID'];
  confirmPassword: Scalars['String'];
  password: Scalars['String'];
};

export type MemberChangePasswordMutationPayload = {
  __typename?: 'MemberChangePasswordMutationPayload';
  token?: Maybe<Scalars['String']>;
  viewer?: Maybe<Viewer>;
};

export type MemberLoginMutationInput = {
  brandId: Scalars['ID'];
  psw: Scalars['String'];
  username: Scalars['String'];
};

export type MemberLoginMutationPayload = {
  __typename?: 'MemberLoginMutationPayload';
  token?: Maybe<Scalars['String']>;
  viewer?: Maybe<Viewer>;
};

export type MemberPrize = {
  __typename?: 'MemberPrize';
  couponExpiry?: Maybe<Scalars['String']>;
  couponHash?: Maybe<Scalars['String']>;
  couponRedeemed?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  memberId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type MemberRegisterMutationInput = {
  brandId: Scalars['ID'];
  confirmEmail: Scalars['String'];
  confirmPassword: Scalars['String'];
  dateOfBirth: Scalars['String'];
  email: Scalars['String'];
  memberNo?: InputMaybe<Scalars['String']>;
  mobile: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  postcode: Scalars['Int'];
  verifyPIN?: InputMaybe<Scalars['String']>;
};

export type MemberRegisterMutationPayload = {
  __typename?: 'MemberRegisterMutationPayload';
  token?: Maybe<Scalars['String']>;
  viewer?: Maybe<Viewer>;
};

export type MemberResetPasswordMutationInput = {
  brandId: Scalars['ID'];
  username: Scalars['String'];
};

export type MemberResetPasswordMutationPayload = {
  __typename?: 'MemberResetPasswordMutationPayload';
  externalPosMessage: Scalars['String'];
};

export type MemberReward = {
  __typename?: 'MemberReward';
  couponExpiry: Scalars['String'];
  couponHash?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  memberId: Scalars['String'];
  prizeTypeId: Scalars['String'];
  redeemed: Scalars['Boolean'];
  redeemedDate?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type MemberRewardPayload = {
  __typename?: 'MemberRewardPayload';
  message?: Maybe<Scalars['String']>;
  reward?: Maybe<MemberReward>;
  success: Scalars['Boolean'];
};

export type MemberUpdateMutationInput = {
  brandId: Scalars['ID'];
  confirmEmail: Scalars['String'];
  email: Scalars['String'];
  mobile: Scalars['String'];
  name: Scalars['String'];
};

export type MemberUpdateMutationPayload = {
  __typename?: 'MemberUpdateMutationPayload';
  token?: Maybe<Scalars['String']>;
  viewer?: Maybe<Viewer>;
};

export type Mutation = {
  __typename?: 'Mutation';
  calculateCartOrder: CalculateCartOrderPayload;
  cartOrderValidation: CartOrderValidationPayload;
  createBuildYourOwnProduct: CreateBuildYourOwnProductPayload;
  createCustomisedProduct: CreateCustomisedProductPayload;
  createMemberReward?: Maybe<MemberRewardPayload>;
  memberChangePassword?: Maybe<MemberChangePasswordMutationPayload>;
  memberLogin?: Maybe<MemberLoginMutationPayload>;
  memberRegister?: Maybe<MemberRegisterMutationPayload>;
  memberResetPassword?: Maybe<MemberResetPasswordMutationPayload>;
  memberUpdate?: Maybe<MemberUpdateMutationPayload>;
  pushCartOrder: PushCartOrderPayload;
  sendMemberVerification?: Maybe<SendMemberVerificationPayload>;
  submitAnswers?: Maybe<SubmitAnswersPayload>;
  submitEntry: SubmitEntryPayload;
  submitSpotifyForm: SubmitSpotifyFormPayload;
  updateEntry: UpdateEntryPayload;
};

export type MutationCalculateCartOrderArgs = {
  input: CalculateCartOrderInput;
};

export type MutationCartOrderValidationArgs = {
  input: CartOrderValidationInput;
};

export type MutationCreateBuildYourOwnProductArgs = {
  input: CreateBuildYourOwnProductInput;
};

export type MutationCreateCustomisedProductArgs = {
  input: CreateCustomisedProductInput;
};

export type MutationCreateMemberRewardArgs = {
  microSiteId: Scalars['String'];
};

export type MutationMemberChangePasswordArgs = {
  input?: InputMaybe<MemberChangePasswordMutationInput>;
};

export type MutationMemberLoginArgs = {
  input?: InputMaybe<MemberLoginMutationInput>;
};

export type MutationMemberRegisterArgs = {
  input?: InputMaybe<MemberRegisterMutationInput>;
};

export type MutationMemberResetPasswordArgs = {
  input?: InputMaybe<MemberResetPasswordMutationInput>;
};

export type MutationMemberUpdateArgs = {
  input?: InputMaybe<MemberUpdateMutationInput>;
};

export type MutationPushCartOrderArgs = {
  input: PushCartOrderInput;
};

export type MutationSubmitAnswersArgs = {
  answers: Array<Scalars['String']>;
  challengeId: Scalars['String'];
};

export type MutationSubmitEntryArgs = {
  input: SubmitEntryInput;
};

export type MutationSubmitSpotifyFormArgs = {
  input: SubmitSpotifyFormInput;
};

export type MutationUpdateEntryArgs = {
  input: UpdateEntryInput;
};

export type NewsFeed = {
  __typename?: 'NewsFeed';
  button?: Maybe<NewsFeedButton>;
  buttonColor?: Maybe<Scalars['String']>;
  buttonText?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  hasButton: Scalars['Boolean'];
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  onClick?: Maybe<OnClickBehavior>;
  textColor?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  windowTitle?: Maybe<Scalars['String']>;
};

export type NewsFeedButton = {
  __typename?: 'NewsFeedButton';
  color?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type Node = {
  id: Scalars['ID'];
};

export type OnClickBehavior = {
  __typename?: 'OnClickBehavior';
  behaviorType: Scalars['String'];
  param?: Maybe<Scalars['String']>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  amountInCents: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  price: Scalars['String'];
  quantity: Scalars['Int'];
};

export type Prize = {
  __typename?: 'Prize';
  couponHash?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  digital: Scalars['Boolean'];
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  title: Scalars['String'];
};

export type Product = Node & {
  __typename?: 'Product';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  ingredientFamilies: Array<IngredientFamily>;
  ingredients: Array<Ingredient>;
  limit?: Maybe<ProductLimit>;
  name?: Maybe<Scalars['String']>;
  new?: Maybe<Scalars['Boolean']>;
  productCategoryId?: Maybe<Scalars['Int']>;
  productVariations: Array<ProductVariation>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  upsellIngredients: Array<Ingredient>;
  upsellProductVariation?: Maybe<ProductVariation>;
  vegan?: Maybe<Scalars['Boolean']>;
};

export type ProductProductVariationsArgs = {
  storeId: Scalars['ID'];
};

export type ProductUpsellIngredientsArgs = {
  ingredientCategoryName: Scalars['String'];
  storeId: Scalars['ID'];
};

export type ProductUpsellProductVariationArgs = {
  storeId: Scalars['ID'];
};

export type ProductCategory = Node & {
  __typename?: 'ProductCategory';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  products: Array<Product>;
};

export type ProductHistory = {
  __typename?: 'ProductHistory';
  product: Product;
  productVariation: ProductVariation;
};

export type ProductLimit = {
  __typename?: 'ProductLimit';
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
};

export type ProductTag = Node & {
  __typename?: 'ProductTag';
  color: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  products: Array<Product>;
};

export type ProductVariation = Node & {
  __typename?: 'ProductVariation';
  energy: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  price: Scalars['String'];
};

export type PurchaseChallenge = Node & {
  __typename?: 'PurchaseChallenge';
  challengeId: Scalars['String'];
  id: Scalars['ID'];
  minimumItemRequirement: Scalars['Int'];
  popupContent: Scalars['String'];
  popupHeader: Scalars['String'];
};

export type PushCartOrderInput = {
  cartItems: Array<CartItemInput>;
  coupon?: InputMaybe<CouponInput>;
  memberPrizeId?: InputMaybe<Scalars['ID']>;
  payWithHybridCash?: InputMaybe<Scalars['Boolean']>;
  payWithLoyaltyPoints?: InputMaybe<Scalars['Boolean']>;
  paymentIntentId: Scalars['String'];
  pickupDateTime?: InputMaybe<Scalars['String']>;
  storeId: Scalars['ID'];
};

export type PushCartOrderPayload = {
  __typename?: 'PushCartOrderPayload';
  externalOrderNumber?: Maybe<Scalars['String']>;
  orderItems: Array<OrderItem>;
  pickupDateTime?: Maybe<Scalars['String']>;
  store: Store;
  totalPrice: Scalars['String'];
  unlockingChallengeResults: Array<UnlockingPurchaseChallengeResult>;
};

export type Query = {
  __typename?: 'Query';
  _dummy?: Maybe<Scalars['String']>;
  allBuildYourOwnProduct: Array<BuildYourOwnProduct>;
  allCampaign: Array<Campaign>;
  allHomeTile?: Maybe<Array<HomeTile>>;
  allNewsFeed: Array<NewsFeed>;
  allProduct: Array<Product>;
  allProductCategory: Array<ProductCategory>;
  allProductTag: Array<ProductTag>;
  allStore?: Maybe<Array<Maybe<Store>>>;
  buildYourOwnProduct?: Maybe<BuildYourOwnProduct>;
  codewordChallenge?: Maybe<CodewordChallenge>;
  newsFeedsByScreen: Array<NewsFeed>;
  product?: Maybe<Product>;
  productCategory?: Maybe<ProductCategory>;
  purchaseChallenge?: Maybe<PurchaseChallenge>;
  questionChallenge?: Maybe<QuestionChallenge>;
  searchProduct: Array<Product>;
  store?: Maybe<Store>;
  uniqueCode?: Maybe<UniqueCode>;
  viewer?: Maybe<Viewer>;
};

export type QueryAllBuildYourOwnProductArgs = {
  first?: InputMaybe<Scalars['Int']>;
};

export type QueryAllProductArgs = {
  isNew?: InputMaybe<Scalars['Boolean']>;
  upsell?: InputMaybe<Scalars['Boolean']>;
};

export type QueryAllStoreArgs = {
  filter?: InputMaybe<StoreFilter>;
  first?: InputMaybe<Scalars['Int']>;
};

export type QueryBuildYourOwnProductArgs = {
  id: Scalars['ID'];
};

export type QueryCodewordChallengeArgs = {
  challengeId: Scalars['ID'];
};

export type QueryNewsFeedsByScreenArgs = {
  location: Scalars['String'];
};

export type QueryProductArgs = {
  id: Scalars['ID'];
};

export type QueryProductCategoryArgs = {
  id: Scalars['ID'];
};

export type QueryPurchaseChallengeArgs = {
  challengeId: Scalars['ID'];
};

export type QueryQuestionChallengeArgs = {
  challengeId: Scalars['ID'];
};

export type QuerySearchProductArgs = {
  limit: Scalars['Int'];
  searchText: Scalars['String'];
};

export type QueryStoreArgs = {
  id: Scalars['ID'];
};

export type QueryUniqueCodeArgs = {
  code: Scalars['String'];
};

export type QuestionChallenge = Node & {
  __typename?: 'QuestionChallenge';
  challengeId: Scalars['String'];
  choices: Array<Scalars['String']>;
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  isMultiChoice: Scalars['Boolean'];
  layout: Scalars['String'];
  question?: Maybe<Scalars['String']>;
};

export type SendMemberVerificationPayload = {
  __typename?: 'SendMemberVerificationPayload';
  externalPosMessage: Scalars['String'];
};

export type SpotifyForm = {
  __typename?: 'SpotifyForm';
  acceptPersonalInformationShare?: Maybe<Scalars['Boolean']>;
  acceptTermsAndConditions?: Maybe<Scalars['Boolean']>;
  answer?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  partyDestination?: Maybe<Scalars['String']>;
  subscribeToMarketing?: Maybe<Scalars['Boolean']>;
  uniqueCode?: Maybe<Scalars['String']>;
};

export type Store = Node & {
  __typename?: 'Store';
  closingTimeToday?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['String']>;
  fullAddress?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  openingTimeToday?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  suburb?: Maybe<Scalars['String']>;
};

export type StoreFilter = {
  location?: InputMaybe<LocationFilter>;
  name?: InputMaybe<Scalars['String']>;
};

export type StripePaymentSheet = {
  __typename?: 'StripePaymentSheet';
  customer: Scalars['String'];
  ephemeralKeySecret?: Maybe<Scalars['String']>;
  paymentIntentId?: Maybe<Scalars['String']>;
  paymentIntentSecret?: Maybe<Scalars['String']>;
};

export type SubmitAnswersPayload = {
  __typename?: 'SubmitAnswersPayload';
  attempts?: Maybe<Scalars['String']>;
  couponHash?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type SubmitEntryInput = {
  code: Scalars['String'];
  microSiteId: Scalars['ID'];
};

export type SubmitEntryPayload = {
  __typename?: 'SubmitEntryPayload';
  entry: Entry;
};

export type SubmitSpotifyFormInput = {
  acceptPersonalInformationShare?: InputMaybe<Scalars['Boolean']>;
  acceptTermsAndConditions?: InputMaybe<Scalars['Boolean']>;
  answer?: InputMaybe<Scalars['String']>;
  authenticationKey: Scalars['String'];
  contactNumber?: InputMaybe<Scalars['String']>;
  dateOfBirth?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  partyDestination?: InputMaybe<Scalars['String']>;
  subscribeToMarketing?: InputMaybe<Scalars['Boolean']>;
  uniqueCode?: InputMaybe<Scalars['String']>;
};

export type SubmitSpotifyFormPayload = {
  __typename?: 'SubmitSpotifyFormPayload';
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type UniqueCode = {
  __typename?: 'UniqueCode';
  claimed: Scalars['Boolean'];
  code: Scalars['String'];
  id: Scalars['ID'];
};

export type UnlockingPurchaseChallengeResult = {
  __typename?: 'UnlockingPurchaseChallengeResult';
  message: Scalars['String'];
  success: Scalars['Boolean'];
  title: Scalars['String'];
};

export type UpdateEntryInput = {
  acceptPersonalInformationShare: Scalars['Boolean'];
  acceptTermsAndConditions: Scalars['Boolean'];
  code: Scalars['String'];
  contactNumber: Scalars['String'];
  emailAddress: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  microSiteId: Scalars['ID'];
  postcode: Scalars['String'];
  state: Scalars['String'];
  streetAddress: Scalars['String'];
  subscribeToMarketing: Scalars['Boolean'];
  suburb: Scalars['String'];
};

export type UpdateEntryPayload = {
  __typename?: 'UpdateEntryPayload';
  entry: Entry;
};

export type Viewer = {
  __typename?: 'Viewer';
  balance?: Maybe<MemberBalance>;
  barcode: Scalars['String'];
  barcodeInline?: Maybe<Scalars['String']>;
  challenges: Array<ViewerChallenge>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  internalTester: Scalars['Boolean'];
  isVerified: Scalars['Boolean'];
  member?: Maybe<Member>;
  memberId: Scalars['ID'];
  memberNumber: Scalars['String'];
  prizes?: Maybe<Array<MemberPrize>>;
  productHistory: Array<ProductHistory>;
  rewards?: Maybe<Array<MemberReward>>;
};

export type ViewerProductHistoryArgs = {
  first: Scalars['Int'];
};

export type ViewerChallenge = {
  __typename?: 'ViewerChallenge';
  challenge: Challenge;
  couponHash?: Maybe<Scalars['ID']>;
  expiryDate: Scalars['String'];
  status: Scalars['String'];
  visible: Scalars['Boolean'];
};

export type MemberRewardMutationVariables = Exact<{
  microSiteId: Scalars['String'];
}>;

export type MemberRewardMutation = {
  __typename?: 'Mutation';
  createMemberReward?: {
    __typename?: 'MemberRewardPayload';
    success: boolean;
    message?: string | null;
    reward?: {
      __typename?: 'MemberReward';
      id: string;
      memberId: string;
      prizeTypeId: string;
      couponHash?: string | null;
      couponExpiry: string;
      redeemed: boolean;
      redeemedDate?: string | null;
      title?: string | null;
      description?: string | null;
      imageUrl?: string | null;
    } | null;
  } | null;
};

export const MemberRewardDocument = gql`
  mutation MemberReward($microSiteId: String!) {
    createMemberReward(microSiteId: $microSiteId) {
      success
      message
      reward {
        id
        memberId
        prizeTypeId
        couponHash
        couponExpiry
        redeemed
        redeemedDate
        title
        description
        imageUrl
      }
    }
  }
`;
export type MemberRewardMutationFn = Apollo.MutationFunction<
  MemberRewardMutation,
  MemberRewardMutationVariables
>;

/**
 * __useMemberRewardMutation__
 *
 * To run a mutation, you first call `useMemberRewardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMemberRewardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [memberRewardMutation, { data, loading, error }] = useMemberRewardMutation({
 *   variables: {
 *      microSiteId: // value for 'microSiteId'
 *   },
 * });
 */
export function useMemberRewardMutation(
  baseOptions?: Apollo.MutationHookOptions<
    MemberRewardMutation,
    MemberRewardMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    MemberRewardMutation,
    MemberRewardMutationVariables
  >(MemberRewardDocument, options);
}
export type MemberRewardMutationHookResult = ReturnType<
  typeof useMemberRewardMutation
>;
export type MemberRewardMutationResult =
  Apollo.MutationResult<MemberRewardMutation>;
export type MemberRewardMutationOptions = Apollo.BaseMutationOptions<
  MemberRewardMutation,
  MemberRewardMutationVariables
>;
