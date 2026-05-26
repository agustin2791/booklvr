import dspy
from pydantic import BaseModel

class BookDetails(BaseModel):
    title: str
    author: str
    isbn_13: str
    short_description: str
    book_cover: str

class BookRecommendation(dspy.Signature):
    """Use a book title or description to look for recommendations of similar books"""

    context: str = dspy.InputField(desc="take this into consideration to recommend something similar")
    text: str = dspy.InputField()
    result: dict[str, list[BookDetails]] = dspy.OutputField(desc="list of books that are similar, with details provided for a physical book")
