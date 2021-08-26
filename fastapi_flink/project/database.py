import hashlib

import datetime
from playhouse.postgres_ext import*
from peewee import *
import uuid


database = PostgresqlDatabase('flink', host='localhost', port=5432, user='reads', password="123456")


class Enterprise(Model):
    uuid = UUIDField(primary_key=True, default=uuid.uuid4)
    name_enterprise = CharField(max_length=50)
    description = CharField(max_length=100)
    symbol= CharField(max_length=10)
    market_value = JSONField()

    class Meta:
        database = database
        table_name = 'enterprise'

    def __str__(self):
        return self.name_enterprise