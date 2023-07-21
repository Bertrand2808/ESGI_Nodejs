import mongoose from "mongoose";
const {model, Schema} = mongoose


/*
    On crée un schéma de données pour la base de données
    On définit les champs et leur type pour éviter les erreurs
*/
const transferSchema = new Schema(
  {
      Country:  {type: String, required: true },
      Population: {type: Number, required: true },
      FirearmsPer100Persons : Number,
      EstimateInCivilianPossession : Number,
      ComputationMethod : Number,
      RegisteredFirearms : Number,
      UnregisteredFirearms : Number,
      GunDeathRate : Number,
      DeathsByFirearm : Number,
      SuicideByFirearm : Number,
      UnintentionalDeaths : String,
      PoliceKillings : Number,
      RatePoliceKillingPer10M : Number,
      Data_Year_Police_Killing : Number,
      Notes : String

  }
)

const toptransfer = model('toptransfer', transferSchema)


export default toptransfer

