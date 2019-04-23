# Auth0 - Logs to Fluentd

This extension will take all of your Auth0 logs and export them to Fluentd. It was adapted from the official [Logstash extension](https://github.com/auth0-extensions/auth0-logs-to-logstash).

## Installation

The extension can be installed from within the [Extensions Gallery](https://manage.auth0.com/#/extensions).

## Local Development

To run the extension locally (in development mode) you can run the following commands:

```bash
yarn install
npm run serve:dev
```

#### Get some data into Fluentd

For test purposes only, just run the following:

```
curl -H "content-type: application/json" -XPUT 'http://127.0.0.1:8080/twitter/tweet/1' -d '{ "user" : "arcseldon", "post_date" : "2016-04-23T14:12:12", "message" : "Testing Auth0 integration with Elasticsearch" }'
```

You could do a `POST` request here, and change the URI to be different to `twitter/tweet/` etc.

Change the `user` value as you wish, and also update the `post_date` value to something near realtime. Just be careful here, I would recommend setting it to something like 12 hours earlier than the current time (to get around any timezone issues etc - remember we're doing a barebones test here, so you can sort this out later - we just want to see this work for now).

You should be getting an `ok` response. Run the same command about 10 times just so we have a few entries to play with.
