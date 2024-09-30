function verifyColor(category) {
  switch (category) {
    case "diatomic nonmetal":
      return "#244D57";
    case "noble gas":
      return "#58962e";
    case "alkali metal":
      return "#bb3e00";
    case "alkaline earth metal":
      return "#0387af";
    case "metalloid":
      return "#2A4165";
    case "polyatomic nonmetal":
      return "#46474C";
    case "post-transition metal":
      return "#433C65";
    case "transition metal":
      return "#623842";
    case "lanthanide":
      return "#2F4D47";
    case "actinide":
      return "#004A77";
    default:
      return "#84049e";
  }
}
export default verifyColor;
