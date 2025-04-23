import lume from "lume/mod.ts";

const site = lume();

site.copy("assets");
site.copy("style.css");

export default site;
