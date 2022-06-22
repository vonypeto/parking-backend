module.exports = (mongoose) => {
  var LotEntrySchema = mongoose.Schema(
    {
      _id: { type: mongoose.Schema.Types.ObjectId },
      lot_count: { type: Number },
      lot_array: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "lot_parkings",
      },
    },
    { timestamps: true }
  );
  LotEntrySchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.lot_id = _id;
    return object;
  });
  const Tokens = mongoose.model("lot_entrys", LotEntrySchema);
  return Tokens;
};
