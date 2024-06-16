class ReminderSystem:
    def __init__(self):
        self.reminders = []

    def add_reminder(self, reminder):
        self.reminders.append(reminder)

    def remove_reminder(self, reminder):
        if reminder in self.reminders:
            self.reminders.remove(reminder)
        else:
            raise ValueError("Reminder not found")

    def get_reminders(self):
        return self.reminders

    def clear_reminders(self):
        self.reminders = []

    def check_reminders(self):
        for reminder in self.reminders:
            reminder.check_expiry()

class Reminder:
    def __init__(self, message, expiry_date):
        self.message = message
        self.expiry_date = expiry_date

    def check_expiry(self):
        # Logic to check if the reminder has expired
        pass

    def remind(self):
        # Logic to send a reminder notification
        pass

# Example usage
reminder1 = Reminder("Renew token", "2022-12-31")
reminder2 = Reminder("Update settings", "2022-11-15")

reminder_system = ReminderSystem()
reminder_system.add_reminder(reminder1)
reminder_system.add_reminder(reminder2)

reminders = reminder_system.get_reminders()
for reminder in reminders:
    reminder.remind()