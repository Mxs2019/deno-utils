export const generateSampleStreamWebhook = (entityId: string, data: any) => {
  return {
    docs: [
      {
        $key: {
          locale: "",
          primary_key: entityId,
        },
        id: entityId,
        uid: entityId,
        ...data,
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
