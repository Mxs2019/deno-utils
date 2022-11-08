export const generateSampleStreamWebhook = (
  entityId: string,
  uid = 2342524
) => {
  return {
    docs: [
      {
        $key: {
          locale: "",
          primary_key: uid.toString(),
        },
        id: entityId,
        name: "Test Entity",
        uid,
      },
    ],
    meta: {
      appSpecificAccountId: "7f26b869468f03fc120dce77b9d83cc48731f6ec",
      eventType: "RECORD",
      timestamp: 1666364107872,
      uuid: "a66a0982-7c5d-4431-808a-cf87f95ccc92",
    },
  };
};
