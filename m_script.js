const mongoose =require("mongoose");
const Schema = mongoose.Schema;

const M_ScriptSchema = new Schema({
  title: String,
 author:String,
 content:String
});
const M_script= mongoose.model("m_script",M_ScriptSchema);

module.exports=M_script;