#!/usr/bin/env python
# coding=utf-8

from test_server import *
from test_customer import *
from test_user import *
'Init'
import unittest
import pathmagic

from server import create_app
from flask_migrate import upgrade


if __name__ == '__main__':
    app = create_app('config.Test')
    tester_app = app.test_client()
    with app.app_context():
        upgrade()
    unittest.main()
