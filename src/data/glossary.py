import requests
import json
import time

# Test with two tags
test_tags = ["regression", "mixed-model"]

# API URL template
url_template = "https://api.stackexchange.com/2.3/tags/{}/wikis?site=stats"

# Collect glossary entries
glossary = []

for tag in test_tags:
    url = url_template.format(tag)
    print(f"Fetching: {tag}")
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        if data["items"]:
            entry = data["items"][0]
            glossary.append({
                "tag": tag,
                "excerpt": entry.get("excerpt", "").strip(),
                "body": entry.get("body", "").strip()
            })
    else:
        print(f"Failed to fetch {tag}: {response.status_code}")
    time.sleep(0.25)  # polite pause

# Save to file
with open("glossary_data.json", "w", encoding="utf-8") as f:
    json.dump(glossary, f, indent=2)

print("Saved glossary_data.json")