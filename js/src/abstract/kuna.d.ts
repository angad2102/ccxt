import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';
interface Exchange {
    xreserveGetNonce(params?: {}): Promise<implicitReturnType>;
    xreserveGetFee(params?: {}): Promise<implicitReturnType>;
    xreserveGetDelegatedTransactions(params?: {}): Promise<implicitReturnType>;
    xreservePostDelegateTransfer(params?: {}): Promise<implicitReturnType>;
    v3PublicGetTimestamp(params?: {}): Promise<implicitReturnType>;
    v3PublicGetCurrencies(params?: {}): Promise<implicitReturnType>;
    v3PublicGetMarkets(params?: {}): Promise<implicitReturnType>;
    v3PublicGetTickers(params?: {}): Promise<implicitReturnType>;
    v3PublicGetK(params?: {}): Promise<implicitReturnType>;
    v3PublicGetTradesHistory(params?: {}): Promise<implicitReturnType>;
    v3PublicGetFees(params?: {}): Promise<implicitReturnType>;
    v3PublicGetExchangeRates(params?: {}): Promise<implicitReturnType>;
    v3PublicGetExchangeRatesCurrency(params?: {}): Promise<implicitReturnType>;
    v3PublicGetBookMarket(params?: {}): Promise<implicitReturnType>;
    v3PublicGetKunaCodesCodeCheck(params?: {}): Promise<implicitReturnType>;
    v3PublicGetLandingPageStatistic(params?: {}): Promise<implicitReturnType>;
    v3PublicGetTranslationsLocale(params?: {}): Promise<implicitReturnType>;
    v3PublicGetTradesMarketHist(params?: {}): Promise<implicitReturnType>;
    v3PublicPostHttpTest(params?: {}): Promise<implicitReturnType>;
    v3PublicPostDepositChannels(params?: {}): Promise<implicitReturnType>;
    v3PublicPostWithdrawChannels(params?: {}): Promise<implicitReturnType>;
    v3PublicPostSubscriptionPlans(params?: {}): Promise<implicitReturnType>;
    v3PublicPostSendTo(params?: {}): Promise<implicitReturnType>;
    v3PublicPostConfirmToken(params?: {}): Promise<implicitReturnType>;
    v3PublicPostKunaid(params?: {}): Promise<implicitReturnType>;
    v3PublicPostWithdrawPrerequest(params?: {}): Promise<implicitReturnType>;
    v3PublicPostDepositPrerequest(params?: {}): Promise<implicitReturnType>;
    v3PublicPostDepositExchangeRates(params?: {}): Promise<implicitReturnType>;
    v3SignGetResetPasswordToken(params?: {}): Promise<implicitReturnType>;
    v3SignPostSignupGoogle(params?: {}): Promise<implicitReturnType>;
    v3SignPostSignupResendConfirmation(params?: {}): Promise<implicitReturnType>;
    v3SignPostSignup(params?: {}): Promise<implicitReturnType>;
    v3SignPostSignin(params?: {}): Promise<implicitReturnType>;
    v3SignPostSigninTwoFactor(params?: {}): Promise<implicitReturnType>;
    v3SignPostSigninResendConfirmDevice(params?: {}): Promise<implicitReturnType>;
    v3SignPostSigninConfirmDevice(params?: {}): Promise<implicitReturnType>;
    v3SignPostResetPassword(params?: {}): Promise<implicitReturnType>;
    v3SignPostCoolSignin(params?: {}): Promise<implicitReturnType>;
    v3SignPutResetPasswordToken(params?: {}): Promise<implicitReturnType>;
    v3SignPutSignupCodeConfirm(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthWOrderSubmit(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthROrders(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthROrdersMarket(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthROrdersMarkets(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthApiTokensDelete(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthApiTokensCreate(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthApiTokens(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthSigninHistoryUniq(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthSigninHistory(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthDisableWithdrawConfirmation(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthChangePassword(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthDepositAddress(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthAnnouncementsAccept(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthAnnouncementsUnaccepted(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthOtpDeactivate(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthOtpActivate(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthOtpSecret(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthROrderMarketOrderIdTrades(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthROrdersMarketHist(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthROrdersHist(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthROrdersHistMarkets(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthROrdersDetails(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthAssetsHistory(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthAssetsHistoryWithdraws(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthAssetsHistoryDeposits(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthRWallets(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthMarketsFavorites(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthMarketsFavoritesList(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthMeUpdate(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthMe(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthFundSources(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthFundSourcesList(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthWithdrawResendConfirmation(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthWithdraw(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthWithdrawDetails(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthWithdrawInfo(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthPaymentAddresses(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthDepositPrerequest(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthDepositExchangeRates(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthDeposit(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthDepositDetails(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthDepositInfo(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthKunaCodesCount(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthKunaCodesDetails(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthKunaCodesEdit(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthKunaCodesSendPdf(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthKunaCodes(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthKunaCodesRedeemedByMe(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthKunaCodesIssuedByMe(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthPaymentRequestsInvoice(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthPaymentRequestsType(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthReferralProgramWeeklyEarnings(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthReferralProgramStats(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthMerchantPayoutServices(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthMerchantWithdraw(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthMerchantPaymentServices(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthMerchantDeposit(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthVerificationAuthToken(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthKunaidPurchaseCreate(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthDevicesList(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthSessionsList(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthSubscriptionsReactivate(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthSubscriptionsCancel(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthSubscriptionsProlong(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthSubscriptionsCreate(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthSubscriptionsList(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAuthKunaIdsList(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostOrderCancelMulti(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostOrderCancel(params?: {}): Promise<implicitReturnType>;
    v3PrivatePutAuthFundSourcesId(params?: {}): Promise<implicitReturnType>;
    v3PrivatePutAuthKunaCodesRedeem(params?: {}): Promise<implicitReturnType>;
    v3PrivateDeleteAuthMarketsFavorites(params?: {}): Promise<implicitReturnType>;
    v3PrivateDeleteAuthFundSources(params?: {}): Promise<implicitReturnType>;
    v3PrivateDeleteAuthDevices(params?: {}): Promise<implicitReturnType>;
    v3PrivateDeleteAuthDevicesList(params?: {}): Promise<implicitReturnType>;
    v3PrivateDeleteAuthSessionsList(params?: {}): Promise<implicitReturnType>;
    v3PrivateDeleteAuthSessions(params?: {}): Promise<implicitReturnType>;
    publicGetDepth(params?: {}): Promise<implicitReturnType>;
    publicGetKWithPendingTrades(params?: {}): Promise<implicitReturnType>;
    publicGetK(params?: {}): Promise<implicitReturnType>;
    publicGetMarkets(params?: {}): Promise<implicitReturnType>;
    publicGetOrderBook(params?: {}): Promise<implicitReturnType>;
    publicGetOrderBookMarket(params?: {}): Promise<implicitReturnType>;
    publicGetTickers(params?: {}): Promise<implicitReturnType>;
    publicGetTickersMarket(params?: {}): Promise<implicitReturnType>;
    publicGetTimestamp(params?: {}): Promise<implicitReturnType>;
    publicGetTrades(params?: {}): Promise<implicitReturnType>;
    publicGetTradesMarket(params?: {}): Promise<implicitReturnType>;
    privateGetMembersMe(params?: {}): Promise<implicitReturnType>;
    privateGetDeposits(params?: {}): Promise<implicitReturnType>;
    privateGetDeposit(params?: {}): Promise<implicitReturnType>;
    privateGetDepositAddress(params?: {}): Promise<implicitReturnType>;
    privateGetOrders(params?: {}): Promise<implicitReturnType>;
    privateGetOrder(params?: {}): Promise<implicitReturnType>;
    privateGetTradesMy(params?: {}): Promise<implicitReturnType>;
    privateGetWithdraws(params?: {}): Promise<implicitReturnType>;
    privateGetWithdraw(params?: {}): Promise<implicitReturnType>;
    privatePostOrders(params?: {}): Promise<implicitReturnType>;
    privatePostOrdersMulti(params?: {}): Promise<implicitReturnType>;
    privatePostOrdersClear(params?: {}): Promise<implicitReturnType>;
    privatePostOrderDelete(params?: {}): Promise<implicitReturnType>;
    privatePostWithdraw(params?: {}): Promise<implicitReturnType>;
}
declare abstract class Exchange extends _Exchange {
}
export default Exchange;
