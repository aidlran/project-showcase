#!/usr/bin/env node

import { cpSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const CONFIG_FILE = 'project-showcase-config.json';

cpSync(
    join(
        // __dirname equvivalent for ESM
        dirname(fileURLToPath(import.meta.url)),
        '../default/', CONFIG_FILE),
    join('./', CONFIG_FILE)
);
