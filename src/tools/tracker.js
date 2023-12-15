import status from "../Data/status";

export const printPage = () => {
  window.print();
};

export const colorCategory = (value) => {
  switch (value) {
    case `${status.Missing}`:
      return "warning";
    case `${status.MissingUrgent}`:
      return "error";
    case `${status.MissingProduct}`:
      return "error";
    case `${status.Approved}`:
      return "success";
    case `${status.QuantityPriceUpdated}`:
      return "success";
    case `${status.QuantityUpdated}`:
      return "success";
    case `${status.QuantityNotSame}`:
      return "warning";
    case `${status.PriceNotSame}`:
      return "warning";
    case `${status.PriceUpdated}`:
      return "success";

    default:
      return "default";
  }
};
