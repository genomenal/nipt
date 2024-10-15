Иструкция по интеграции Docusaurus с Algolia: https://docusaurus.io/docs/search

Создания индекса поиска описано здесь: https://docsearch.algolia.com/docs/run-your-own 

Команда пересоздания индекса (запускать в этой папке, подставив свой API_KEY в algolia.env)

```shell
docker run -it --env-file=algolia.env -e "CONFIG=$(cat config.json | jq -r tostring)" algolia/docsearch-scraper
```
