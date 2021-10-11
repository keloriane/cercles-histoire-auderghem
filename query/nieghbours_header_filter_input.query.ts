export const NEIGHBOUR_HEADER_FILTER_INPUT = `
query FilteredNeighbour($id: ID!) {
  neighbour(id: $id) {
    id
    quartier {
      nomQuartier
    }
  }
}


`;

export const PROJECT_DETAIL_QUERY = `query HomePage($projectName: String) {
      project(filter: {infosSlug: {eq: $projectName}}) {
            _allDetailHeaderQuoteLocales {
      locale
      value
    }
    infosProjectColor {
      hex
    }
    detailHeaderLogo{
      url
    }
    detailHeaderCover {
      url
    }
    detailBodySlider {
      url
    }
    _allDetailHeaderQuoteLocales{
      locale
      value
    }
    _allDetailHeaderTitleLocales {
      locale
      value
    }
    _allDetailHeaderTextLocales {
      locale
      value
    }
    _allDetailBodyChallengeLocales{
      locale
      value
    }
    _allDetailBodyNumbersLocales{
      locale
      value {
        digit
        text
      }
    }
    detailBodyDevices{
      url
    }
    _allDetailBodySolutionLocales{
      locale
      value
    }
  }
 }`;
