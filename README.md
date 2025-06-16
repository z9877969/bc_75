# Module_07. lesson_1

# _ Селектори _

## 1. Що вирішують селектори.

`-` обчислення даних зі стейту

## 2. Найменування.

`-` префікс select - [рекомендація від RTK](https://redux.js.org/style-guide#name-selector-functions-as-selectthing)

## 3. Складові селектори.

```
export const selectOrderData = createSelector(
  [(state) => state.global.order],
  (order) => {
    if (order) {
      return {
        epolicyOrderId: order[SAVED_ORDER_TYPE.EPOLICY].id,
        vclOrderId: order[SAVED_ORDER_TYPE.VCL]?.id ?? null,
        billAmount: order[SAVED_ORDER_TYPE.VCL]
          ? order[SAVED_ORDER_TYPE.VCL].brokerDiscountedPayment +
            order[SAVED_ORDER_TYPE.EPOLICY].brokerDiscountedPayment
          : order[SAVED_ORDER_TYPE.EPOLICY].brokerDiscountedPayment,
        shopOrderNumber: order[SAVED_ORDER_TYPE.EPOLICY].code,
        email: order[SAVED_ORDER_TYPE.EPOLICY].customer.email,
        orderState: order[SAVED_ORDER_TYPE.EPOLICY].state,
      };
    }
    return null;
  }
);
```

## 4. Оптимізація
`-` createSelect

## 5. Persist
