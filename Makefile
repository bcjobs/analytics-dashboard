NODE-BIN = node_modules/.bin

build:
	$(NODE-BIN)/bower install
	$(NODE-BIN)/ember build --env production

run:
	node web.js

debug:
	ember s --proxy http://analytics.bcjobs.ca

deploy: build
	./deploy.sh

.PHONY: build run debug deploy
