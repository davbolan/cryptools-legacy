

<?php
$metaOpenGraphText = <<<EOD
  [
    { "charset": "utf-8" },
    { "name":       "viewport",             "content": "width=device-width, initial-scale=1" },
    { "name":       "description",          "content": "$web_description" },
    { "http-equiv": "Content-Language",     "content": "$web_lang>" },
    { "name":       "distribution",         "content": "global" },
    { "name":       "Robots",               "content": "all" },
    { "property":   "og:type",              "content": "website" },
    { "property":   "og:title",             "content": "$web_title>" },
    { "property":   "og:site_name",         "content": "$web_title>" },
    { "property":   "og:image",             "content": "$web_logo>" },
    { "property":   "og:description",       "content": "$web_description>" },
    { "property":   "og:url",               "content": "$web_root>" },
    { "property":   "og:locale",            "content": "$web_fullLang>" },
    { "property":   "twitter:card",         "content": "summary_large_image" },
    { "property":   "twitter:description",  "content": "$web_description>" },
    { "property":   "twitter:title",        "content": "$web_title>" },
    { "property":   "twitter:site",         "content": "@Daviletor" },
    { "property":   "twitter:image",        "content": "$web_logo>" },
    { "property":   "twitter:creator",      "content": "@Daviletor"
    }
  ]
  EOD;
$metaOpenGraph = json_decode($metaOpenGraphText, true);
?>

<title><?php echo $web_title; ?></title>

<?php
 foreach ($metaOpenGraph as $jsonDataKey => $jsonMetaData) {
  $tags = "";
  foreach ($jsonMetaData as $tag => $tagValue) 
  {
     $tags .= " $tag=\"$tagValue\"";
  }
  echo "<meta $tags/>", PHP_EOL;
}
?>

<link rel="canonical" href="<?php echo $web_root; ?>" />