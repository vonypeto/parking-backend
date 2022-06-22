module.exports = (mongoose) => {
  var parkingSchema = mongoose.Schema(
    {
      _id: { type: mongoose.Schema.Types.ObjectId },
      is_leave: { type: Boolean },
      is_park: { type: Boolean },
      fee: { type: Number },
      parking_size: { type: Number },
      parking_lot: { type: String },
      date_park: { type: Date },
    },
    { timestamps: true }
  );
  parkingSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.parking_id = _id;
    return object;
  });
  const Tokens = mongoose.model("lot_parkings", parkingSchema);
  return Tokens;
};
