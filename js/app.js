function drinkRecipe(name, ingredients, glass, image, category, liquor){
	this.name = name;
	this.ingredients = ingredients;
	this.glassType = glass;
	this.imageProperty = image;
	this.category = category;
  this.baseLiquior = liquor;
	this.percentMatch = 0;
}

var drinks = [
    new drinkRecipe('Screwdriver',[['Vodka','1.5 oz'],['Orange juice','6 oz']],'high ball','highball.jpg','cold','vodka'),
    new drinkRecipe('Margarita',[['Tequila','1.5 oz'],['Triple sec','1.5 oz'],['Lime juice','1-1.25 oz'],['Salt','on the rim of the glass']],'margarita','margarita.jpg','cold','tequila'),
    new drinkRecipe('Irish Coffee',[['Whiskey','1.5 oz'],['Coffee','1 cup'],['Brown sugar','1 tablespoon']],'Irish Coffee','irish.jpg','warm','whiskey'),
    new drinkRecipe('Mimosa',[['champagne','1/3 cup'],['orange juice','1/3 cup'],['triple sec','1 tablespoon (optional)']],'flute','flute.jpg','cold','champagne')

  ];
