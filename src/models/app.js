import { subDays, isWithinInterval } from "date-fns";
import { action } from "easy-peasy";
import {
  uniqueNamesGenerator,
  animals,
  adjectives,
  colors
} from "unique-names-generator";
import randomNumber from "random-number-in-range";

const lisDates = new Array(100)
  .fill({})
  .map((item, index) => subDays(new Date(), index + 1));

const appModel = {
  dateFrom: subDays(new Date(), 1),
  dateTo: subDays(new Date(), 1),
  itemsSellingSku: new Array(100).fill({}).map((item, index) => ({
    namaProduct: uniqueNamesGenerator({
      dictionaries: [animals, adjectives, colors]
    }),
    harga: randomNumber(),
    jmlTerjual: randomNumber(),
    date: lisDates[index]
  })),
  topSellingSKU: [],
  setDate: action((state, payload) => {
    const { dateFrom, dateTo } = payload;
    state.dateFrom = dateFrom;
    state.dateTo = dateTo;
  }),
  getTopSellingSKU: action((state, payload) => {
    if (!Array.isArray(state.itemsSellingSku)) return [];

    const filterDate = state.itemsSellingSku.filter(item =>
      isWithinInterval(new Date(), {
        start: state.dateFrom,
        end: state.dateTo
      })
    );
    return filterDate.slice(0, 5);
  })
};

export default appModel;