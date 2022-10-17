import pytz

print('Timezones')
result = []
for timeZone in pytz.all_timezones:
    result.append(timeZone)
print(result)