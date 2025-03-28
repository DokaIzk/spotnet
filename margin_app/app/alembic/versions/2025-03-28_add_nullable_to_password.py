"""Add nullable to password

Revision ID: 28384c324fea
Revises: 7a89efc80ab6
Create Date: 2025-03-28 12:36:55.572543

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '28384c324fea'
down_revision: Union[str, None] = '7a89efc80ab6'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('admins', schema=None) as batch_op:
        batch_op.alter_column('password',
               existing_type=sa.VARCHAR(length=255),
               nullable=True,
               existing_comment='The hashed password of the admin.')

    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('admins', schema=None) as batch_op:
        batch_op.alter_column('password',
               existing_type=sa.VARCHAR(length=255),
               nullable=False,
               existing_comment='The hashed password of the admin.')

    # ### end Alembic commands ###
