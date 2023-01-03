import Application from 'flight-icons-hashicorp-logo-fill-issue/app';
import config from 'flight-icons-hashicorp-logo-fill-issue/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
