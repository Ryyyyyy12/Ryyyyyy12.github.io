import { useState } from "react";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FRAMEWORKS, LANGUAGES, TOOLS } from "../shared/skills";

function TechTools() {
  const theme = useTheme();

  const categories: Record<string, any[]> = {
    tools: TOOLS,
    frameworksLibraries: FRAMEWORKS,
    languages: LANGUAGES,
  };

  const [selectedCategory, setSelectedCategory] = useState<string>("languages");

  return (
    <div
      className={`bg-${theme.palette.mode === "dark" ? "darkblue" : ""}/50`}
      data-aos="fade-down"
    >
      <div
        className={`text-base font-thin leading-relaxed container p-5 ${
          theme.palette.mode === "dark" ? "text-white" : "text-black"
        }`}
      >
        <h3 className="text-md-start text-center pb-3">⚙️ Techs-Tools</h3>
        <div className="container">
          {Object.keys(categories).map((categoryKey) => (
            <button
              key={categoryKey}
              className={`rounded-full bg-gray-700 font-bold py-1 px-3 m-2 hover:bg-red text-white ${
                selectedCategory === categoryKey ? "bg-red" : ""
              }`}
              onClick={() => setSelectedCategory(categoryKey)}
            >
              {categoryKey.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}
            </button>
          ))}

          <Grid container spacing={1} sx={{ padding: "2rem" }}>
            {categories[selectedCategory].map((item: any) => (
              <Grid item key={item.id} xs={6} md={3} lg={2}>
                <div className="flex items-center mb-2" key={item.id}>
                  <img
                    src={item.logo}
                    alt={`${item.name} Logo`}
                    width="20"
                    height="20"
                    className="mr-2"
                  />
                  <span>
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </span>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default TechTools;
