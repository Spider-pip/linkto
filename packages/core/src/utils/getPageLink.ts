import { __DEV__ } from ".";
import { PageLinkPreference } from "..";

export type PageLinkReturn = [string, string];
export type GetPageLinkSignature = (
  user: string,
  preference: "PATH" | "SUBDOMAIN" | "CUSTOM",
  customDomain?: string | null
) => PageLinkReturn;

/**
 * It gets the `URL` path and `Label` for the user
 * page according to his page preference
 *
 * @param user - Linkto username
 * @param preference - Page preference type
 * @param [customDomain] - User custom domain
 * @returns {PageLinkReturn} `[label, url]`
 */
export const getPageLink: GetPageLinkSignature = (
  user,
  preference,
  customDomain = null
): PageLinkReturn => {
  let pageLinkLabel: string;
  let pageLinkUrl: string;

  switch (preference) {
    case PageLinkPreference.PATH: {
      pageLinkLabel = `linkto.study/${user}`;
      pageLinkUrl = __DEV__
        ? `https://linkto.study/p/${user}`
        : `https://linkto.study/p/${user}`;
      break;
    }
    case PageLinkPreference.SUBDOMAIN: {
      pageLinkLabel = `${user}.linkto.study`;
      pageLinkUrl = __DEV__
        ? `https://${user}.linkto.study`
        : `https://${user}.linkto.study`;
      break;
    }
    case PageLinkPreference.CUSTOM: {
      pageLinkLabel = customDomain as string;
      pageLinkUrl = `https://${customDomain}`;
      break;
    }
    default: {
      pageLinkLabel = "";
      pageLinkUrl = "";
      break;
    }
  }

  return [pageLinkLabel, pageLinkUrl];
};

export default getPageLink;
