/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

const getTypescriptCompilerPath = require('./getTypescriptCompilerPath');
const paths = require('../../config/paths');

let existingConfig = null;

function readTypescriptConfig() {
  if (existingConfig == null) {
    const typescriptCompilerPath = getTypescriptCompilerPath();
    const typescript = require(typescriptCompilerPath);
    existingConfig = typescript.getParsedCommandLineOfConfigFile(
      paths.appTsConfig,
      undefined,
      typescript.sys
    );
  }

  return existingConfig;
}

module.exports = readTypescriptConfig;
