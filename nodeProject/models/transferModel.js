import mongoose, { Schema } from "mongoose";

/*
    On crée un schéma de données pour la base de données
    On définit les champs et leur type pour éviter les erreurs
*/
const schema = new Schema(
  {
    Player: {
      type: String,
      required: true
    },
    Year: {
      type: Number,
      required: true
    },
    Fee: {
      type: String,
    },

    FromClub: {
      type: String,
      required: true
    },
  }
)

export const TopTransfer = mongoose.model('TopTransfer', schema)


export default TopTransfer
