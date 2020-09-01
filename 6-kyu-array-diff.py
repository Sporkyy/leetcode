# 6 kyu | Array.diff
# https://www.codewars.com/kata/523f5d21c841566fde000009

# Your goal in this kata is to implement a difference function, which subtracts
# one list from another and returns the result.

# It should remove all values from list a, which are present in list b.

# array_diff([1,2],[1]) == [2]

# If a value is present in b, all of its occurrences must be removed from the other:

# array_diff([1,2,2,2,3],[2]) == [1,3]

# =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

# def array_diff(a, b):
#     for n in b:
#         while a.count(n):
#             a.remove(n)
#     return a

# =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

def array_diff(a, b):
    set_b = set(b)
    return [n for n in a if n not in set_b]

# =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


print("✅" if array_diff([1, 2], [1]) == [2]
      else "a was [1,2], b was [1], expected [2]")

print("✅" if array_diff([1, 2, 2], [1]) == [
    2, 2] else "a was [1,2,2], b was [1], expected [2,2]")

print("✅" if array_diff([1, 2, 2], [2]) == [1]
      else "a was [1,2,2] else b was [2], expected [1]")

print("✅" if array_diff([1, 2, 2], []) == [
    1, 2, 2] else "a was [1,2,2], b was [], expected [1,2,2]")

print("✅" if array_diff([], [1, 2]) == [] else
      "a was [], b was [1,2], expected []")
