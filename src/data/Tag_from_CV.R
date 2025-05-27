library(jsonlite)
library(readr)

setwd("H:\\My Drive\\Documents\\projects\\thedataguru-extras")



# STEP 1: Read the CSV
df <- read_csv("SEDE_200_top_tags.csv")

# STEP 2: Rename columns if needed (make sure they match)
names(df) <- c("TagId", "TagName", "Excerpt", "FullWikiBody")  # adjust if column names differ

# STEP 3: Convert to list of named objects
glossary_list <- apply(df, 1, function(row) {
  list(
    id = as.integer(row[["TagId"]]),
    name = row[["TagName"]],
    excerpt = row[["Excerpt"]],
    body = row[["FullWikiBody"]]
  )
})

# STEP 4: Write to JSON
write_json(glossary_list, "glossary_data.json", pretty = TRUE, auto_unbox = TRUE)
