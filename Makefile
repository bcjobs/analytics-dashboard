NODE-BIN = node_modules/.bin

build:
	$(NODE-BIN)/bower install
	$(NODE-BIN)/ember build

	.PHONY: build
